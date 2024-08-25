const {body} = require('express-validator');
const{param} = require('express-validator');
const{query} = require('express-validator')

exports.validate = (method) => {
  switch (method) {
    case 'signUp': {
      return [
        body('name').exists().withMessage("name is required").not().isEmpty().withMessage("name is required"),
        body('email').exists().withMessage("email is required").not().isEmpty().withMessage("email is required"),
        body('phone').exists().withMessage("phone is required").not().isEmpty().withMessage("phone is required"),
        body('password').exists().withMessage("password is required").not().isEmpty().withMessage("password is required"),
      ]
    }
    case 'otp': {
      return [
        body('phone').exists().withMessage("phone is required").not().isEmpty().withMessage("phone is required"),
        body('password').exists().withMessage("password is required").not().isEmpty().withMessage("password is required"),
        body('otp').exists().withMessage("otp is required").not().isEmpty().withMessage("otp is required"),
      ]
    }
    case 'signIn': {
      return [
        body('phone').exists().withMessage("phone is required").not().isEmpty().withMessage("phone is required"),
        body('password').exists().withMessage("password is required").not().isEmpty().withMessage("password is required"),
      ]
    }
    case 'reset-password': {
      return [
        body('phone').exists().withMessage("phone is required").not().isEmpty().withMessage("phone is required"),
      ]
    }
    case 'update-password': {
      return [
        body('password').exists().withMessage("password is required").not().isEmpty().withMessage("password is required"),
        body('otp').exists().withMessage("otp is required").not().isEmpty().withMessage("otp is required"),
      ]
    }
  
    
    
  }
}