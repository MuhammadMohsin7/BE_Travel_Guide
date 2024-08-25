const accountSid = "ACtest"; //live
const authToken = "ACtest";// live

const twilio = require("twilio")(accountSid, authToken);

const send_message = function(to, otp) {

       let bodyText = "Your verification OTP is " + otp

       twilio.messages 
       .create({ 
          body: bodyText,  
          from:'123',  
          //from:'HireMat',  
          to: to 
        }) 
       .then(message => console.log(message.sid)) 
       .done();
};
//--//
module.exports = {send_message};
