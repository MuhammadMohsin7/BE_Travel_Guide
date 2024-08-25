require("dotenv").config();
let hosts = {
    develop: "develop",
    localhost: "localhost",
    production: "production"
};
let config = {
    port: process.env.PORT,
    host: null,
    hosts: hosts,
    logging: true,
    enc_enabled: false
};
const os = require("os");
config.hostname = os.hostname();
console.log(os.hostname());

// if(config.hostname === "TP"){config.host = hosts.localhost;}
// else if(config.hostname === "Usmans-MacBook-Pro.local"){config.host = hosts.localhost;}
// else if(config.hostname === "ip-172-31-32-129"){config.host = hosts.develop;}
// else if(config.hostname === "ip-172-31-46-230"){config.host = hosts.production;}
// else{throw new Error("Server Config is Not configured!!!");}



switch (process.env.ENV) {
    case "development":
      config.user = process.env.DATABASE_USERNAME_DEVELOPMENT;
      config.pass = process.env.DATABASE_PASSWORD_DEVELOPMENT;
      config.host = hosts.localhost;//process.env.DATABASE_HOST_DEVELOPMENT;
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




// config.host = hosts.localhost; // force overwrite
//config.enc_enabled = (config.host !== hosts.localhost);
module.exports = config;
