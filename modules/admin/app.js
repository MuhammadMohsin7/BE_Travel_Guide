const express = require("express");
const authChecker = require("../../middleware/auth_checker");
//--//
let routes = function(){
    const router = express();


    //--//
    router.use("/", require("./routes/admin")());
    //--//
  

    return router;
};
module.exports = routes;
