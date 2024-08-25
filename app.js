
const cors = require("cors");
const morgan = require("morgan");
const moment = require("moment");
const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require('cookie-parser')

//------------------------------------//
const app = express();

app.use(cors({optionsSuccessStatus: 200}));
app.options("*", cors({optionsSuccessStatus: 200}));
//------------------------------------//
app.use(express.json({limit: "50mb"}));
//app.use(bodyParser.urlencoded({extended: true}));


app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

app.use(cookieParser());


//------------------------------------//
app.use("/uploads", express.static(__dirname + "/uploads"));

//------------------------------------//
const console_stamp = require("console-stamp");
console_stamp(console, {
    pattern: "YYYY-MM-DD HH:mm:ss",
    formatter: function(){return moment().format("YYYY-MM-DD HH:mm:ss");}
});
app.use(require("./middleware/allowed_methods"));
//------------------------------------//
morgan.token("date", function(){
    return moment().format("YYYY-MM-DD HH:mm:ss");
});
morgan.token("status", function(req, res){
    const status = (typeof res.headersSent !== "boolean" ? Boolean(res._header): res.headersSent) ? res.statusCode: undefined;
    const color = status >= 500 ? 31: status >= 400 ? 33: status >= 300 ? 36: status >= 200 ? 32: 0;
    return `\x1b[${color}m${status}\x1b[0m`;
    // 31 -> red, 33 -> yellow, 36 -> cyan, 32 -> green, 0 -> no color
});
app.use(morgan("[:date] [:method] :url :status :res[content-length] - :response-time ms"));
//------------------------------------//
app.use(require("./middleware/request_getters"));
app.use(require("./middleware/authorization"));
// app.use(require("./middleware/request_crypto_parser"));
// app.use(require("./middleware/request_parser"));
//------------------------------------//

/****
* Routes for common
*/

/****
* Routes for shahadh admin
*/
app.use("/api/v1/admin", require("./modules/admin/app.js")());


app.use("/api/v1/user", require("./modules/user/app.js")());

 


//------------------------------------//
app.use(require("./middleware/not_found"));
app.use(require("./middleware/response_handler"));

//------------------------------------//
const db_config = require("./config/db");
const server_config = require("./config/server");
console.log("server host", server_config.host);
console.log("enc enabled", server_config.enc_enabled);
console.log("database host", db_config.host);
//------------------------------------//
const sequelize = require("./sequelize/sequelize");
sequelize.connection.authenticate().then(function(){
    console.log("DB Connection Successful");
    app.listen(server_config.port, async function(error){
        if(error){console.log("Server is not listening...", error);}
        else{
            console.log("Server is listening on HOST", server_config.hostname, "on PORT", server_config.port);
            let NODE_APP_INSTANCE = parseInt(process.env.NODE_APP_INSTANCE || 0) || 0;
            // if(NODE_APP_INSTANCE === 0){await require("./cron_jobs/iqama_expiry")(db_config, server_config, sequelize);}
        }
    });
}).catch(function(error){console.log("Unable to connect to database", error);});
//------------------------------------//
module.exports = app;
