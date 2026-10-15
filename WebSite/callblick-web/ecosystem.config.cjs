module.exports = {
  apps: [
    {
      name: "callblick-web",
      script: "serve",
      cwd: __dirname,
      env: {
        PM2_SERVE_PATH: "out",
        PM2_SERVE_PORT: "3001",
        PM2_SERVE_SPA: "false",
        PM2_SERVE_HOMEPAGE: "/index.html",
      },
      autorestart: true,
      max_memory_restart: "200M",
    },
  ],
};
