module.exports = {
    apps: [
      {
        name: "server",
        script: "./src/server.js",
        instances: 1,
        autorestart: true,
        watch: false,
        env: {
          NODE_ENV: "production",
          PORT: 5000,
          MONGO_DB_URL: process.env.MONGO_DB_URL,
        }
      }
    ]
  }
