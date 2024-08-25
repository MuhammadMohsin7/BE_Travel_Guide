const express = require("express");
const admin = require("../controllers/admin");
const parser = require("../../../middleware/request_parser");
const authChecker = require("../../../middleware/auth_checker");
const validator = require("../validation/admin");
const filter = require('../../../middleware/filtering_requests');

const auth = require("../../../middleware/auth")


//--//
const multer = require("../../../utils/multer");

const upload2 = function(req, res, next){
    //let uploader = multer.uploader.single("iqama_image");
   // let uploader = multer.uploader.single("image");


    let uploader = multer.uploader.fields([
        { name: "main_image", maxCount: 1 },
  { name: "secondary_image_1", maxCount: 1 },
  { name: "secondary_image_2", maxCount: 1 },
  { name: "secondary_image_3", maxCount: 1 },
  { name: "secondary_image_4", maxCount: 1 },
  { name: "secondary_image_5", maxCount: 1 },
    ])


    
    
    uploader(req, res, function(err){
        if(err){
            console.log("multer err = " ,err)
            return next(err);}
        return next();
    });
};



//--//
let routes = function(){
    let routes = express.Router({mergeParams: true});


     /****
      * This route is used to add super admin
      */
    //   routes.route("/").get([authChecker("?"), parser], admin.ok);
      routes.route("/auth/login").post(validator.validate("login"), filter, admin.login);
      routes.route("/auth/register").post(validator.validate("signUp"), filter, admin.signUp);


      routes.route("/view/users").get(auth, admin.getUsers);
      routes.route("/add/user").post(auth, admin.addUser);


      routes.route("/view/categories").get(auth, admin.getCategories);
      routes.route("/view/category/:category_id").get(auth, admin.getCategoryById);
      routes.route("/add/category").post(auth, admin.addCategory);
      routes.route("/update/category/:category_id").put(auth, admin.updateCategory);
      routes.route("/remove/category/:category_id").delete(auth, admin.deleteCategory);


      routes.route("/view/posts").get(auth, admin.getPosts);
      routes.route("/view/post/:post_id").get(auth, admin.getPostById);
      routes.route("/add/post").post(auth, upload2, admin.addPost);
      routes.route("/update/post/:post_id").put(auth, upload2, admin.updatePost);
      routes.route("/remove/post/:post_id").delete(auth, admin.deletePost);






    return routes;
};
//--//
module.exports = routes;
