const express = require("express");
const user = require("../controllers/user");
const validator = require("../validation/user");
const filter = require('../../../middleware/filtering_requests');
const auth = require("../../../middleware/auth")

//--//
const multer = require("../../../utils/multer");

const upload = function(req, res, next){
    //let uploader = multer.uploader.single("iqama_image");
    let uploader = multer.uploader.single("image");
    
    uploader(req, res, function(err){
        if(err){return next(err);}
        return next();
    });
};



//--//
let routes = function(){
    let routes = express.Router({mergeParams: true});


    //   routes.route("/auth/signUp").post(validator.validate("signUp"), filter, user.signUp);
    //   routes.route("/auth/verifyOTP").post(validator.validate("otp"), filter, user.verifyOTP);
    //   routes.route("/auth/signIn").post(validator.validate("signIn"), filter, user.signIn);

    //   routes.route("/auth/reset-password").post(validator.validate("reset-password"), filter, user.forgotPassword);
    //   routes.route("/auth/update-password").post(auth,validator.validate("update-password"), filter, user.updatePassword);



      routes.route("/view/posts").get( user.getPosts);
      routes.route("/view/post/:post_id").get( user.getPostById);



    return routes;
};
//--//
module.exports = routes;
