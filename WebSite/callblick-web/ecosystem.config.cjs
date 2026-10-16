module.exports = {
  apps: [
    {
      name: "callblick-web",
      script: "server.cjs",
      cwd: __dirname,
      env: {
        HOST: "127.0.0.1",
        NODE_ENV: "production",
        PORT: "3001",
      },
      autorestart: true,
      max_memory_restart: "200M",
    },
  ],
};
