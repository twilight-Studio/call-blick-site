#!/usr/bin/env bash

set -Eeuo pipefail

if [[ $# -ne 2 || ! "$1" =~ ^[0-9a-f]{40}$ ]]; then
  echo "Usage: $0 <40-character-git-sha> <release-archive>" >&2
  exit 64
fi

readonly revision="$1"
readonly app_root="/var/www/callblick-web"
readonly releases_dir="$app_root/releases"
readonly release_dir="$releases_dir/$revision"
readonly archive="$app_root/$2"
readonly production_env="$app_root/shared/.env.production"
readonly runtime_user="webdeploy"

if [[ "$archive" != "$app_root/incoming/$revision.tar.gz" || ! -f "$archive" ]]; then
  echo "Invalid or missing release archive" >&2
  exit 66
fi

mkdir -p "$releases_dir"

if [[ ! -d "$release_dir" ]]; then
  mkdir "$release_dir"
  tar -xzf "$archive" -C "$release_dir"
fi
rm -f "$archive"

cd "$release_dir"
if [[ ! -f "$production_env" ]]; then
  echo "Missing production environment file: $production_env" >&2
  exit 78
fi
ln -sfn "$production_env" .env.production
npm ci --no-audit --no-fund
npm run build

ln -sfn "$release_dir" "$app_root/current.next"
mv -Tf "$app_root/current.next" "$app_root/current"

cd "$app_root/current"
if [[ "$(id -un)" == "$runtime_user" ]]; then
  pm2 startOrReload ecosystem.config.cjs --env production --update-env
  pm2 save --force
else
  sudo -u "$runtime_user" -H pm2 startOrReload ecosystem.config.cjs --env production --update-env
  sudo -u "$runtime_user" -H pm2 save --force
fi

curl --fail --silent --show-error \
  --retry 10 --retry-delay 2 --retry-connrefused \
  http://127.0.0.1:3001/ >/dev/null

find "$releases_dir" -mindepth 1 -maxdepth 1 -type d -printf '%T@ %p\n' \
  | sort -nr \
  | tail -n +6 \
  | cut -d' ' -f2- \
  | xargs -r rm -rf --

echo "Deployed $revision"
