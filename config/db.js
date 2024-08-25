require("dotenv").config();
let server = require("./server");
let config = {
    port: 3306,
    dialect: "mysql",
    showErrors: true,
    charset: "utf8mb4",
    logging: false,
    pool: {
        min: 0,
        max: 10,
        idle: 30 * 1000,
        evict: 2 * 1000,
        acquire: 60 * 1000,
        handleDisconnects: true
    },
    dialectOptions: {charset: "utf8mb4"}
};


switch (process.env.ENV) {
  case "development":
    config.user = process.env.DATABASE_USERNAME_DEVELOPMENT;
    config.pass = process.env.DATABASE_PASSWORD_DEVELOPMENT;
    config.host = process.env.DATABASE_HOST_DEVELOPMENT;
    config.name = process.env.DATABASE_NAME_DEVELOPMENT
    break;
    case "staging":
      config.user = process.env.DATABASE_USERNAME_STAGING;
      config.pass = process.env.DATABASE_PASSWORD_STAGING;
      config.host = process.env.DATABASE_HOST_STAGING;
      config.name = process.env.DATABASE_NAME_STAGING;
      break;
    case "production":
      config.user = process.env.DATABASE_USERNAME_PRODUCTION;
      config.pass = process.env.DATABASE_PASSWORD_PRODUCTION;
      config.host = process.env.DATABASE_HOST_PRODUCTION;
      config.name = process.env.DATABASE_NAME_PRODUCTION;
      break;
    
  }

console.log("database host", config.host);
module.exports = config;
