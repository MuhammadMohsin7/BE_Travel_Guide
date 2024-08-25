
// const sgMail = require('@sendgrid/mail')
// if(process.env.ENV === "development")
// {
//   sgMail.setApiKey(process.env.SENDGRID_API_KEY_STAGING)
// }
// else if(process.env.ENV === "staging" || process.env.ENV === "internal" )
// {
//   sgMail.setApiKey(process.env.SENDGRID_API_KEY_STAGING)
// }
// else
// {
//   sgMail.setApiKey(process.env.SENDGRID_API_KEY_PRODUCTION)
// }


const AWS = require('aws-sdk');
const SES_CONFIG = {
  accessKeyId: '',
  secretAccessKey: '',
  region: '',
};
const AWS_SES = new AWS.SES(SES_CONFIG);


const sendto = function(to, subject, body, type, from, from_name)
{

  let params = {}
  
  if (type == "email")
  {
    params = {
      Source: from_name + " <" +from+">",
      Destination: {
        ToAddresses: [
          to
        ],
      },
      ReplyToAddresses: [],
      Message: {
        Body: {
          Html: {
            Charset: 'UTF-8',
            Data: body,
          },
        },
        Subject: {
          Charset: 'UTF-8',
          Data: subject,
        }
      },
    };
  }
  else if (type == "html")
  {
    params = {
      Source: "",
      Destination: {
        ToAddresses: [
          to
        ],
      },
      ReplyToAddresses: [],
      Message: {
        Body: {
          Html: {
            Charset: 'UTF-8',
            Data: body,
          },
        },
        Subject: {
          Charset: 'UTF-8',
          Data: subject,
        }
      },
    };
  }
  else
  {

    params = {
      Source: "",
      Destination: {
        ToAddresses: [
          to
        ],
      },
      ReplyToAddresses: [],
      Message: {
        Body: {
          Text: {
            Charset: "UTF-8",
            Data: body
           }
        },
        Subject: {
          Charset: 'UTF-8',
          Data: subject,
        }
      },
    };
  }

  var sendPromise = AWS_SES.sendEmail(params).promise();
  sendPromise.then(
    function(data) {
      console.log('Email sent')
      console.log(data.MessageId);
    }).catch(
      function(err) {
      console.error(err, err.stack);
    });


    //SendGrid

  // let msg = {}

  // if (type == "certificate_email")
  // {
  //   msg = {
  //     to: to, // Change to your recipient
  //     from: {
  //       email: from,
  //       name: from_name
  //   },
  //     subject: subject,
  //     //text: html,
  //     html: body,
  //   }
  // }
  // else if (type == "html")
  // {
  //   msg = {
  //     to: to, // Change to your recipient
  //     from: 'tech@shahadh.com',
  //     subject: subject,
  //     //text: html,
  //     html: body,
  //   }
  // }
  // else
  // {
  //   msg = {
  //     to: to, // Change to your recipient
  //     from: 'tech@shahadh.com', // Change to your verified sender
  //     subject: subject,
  //     text: body,
  //     //html: html,
  //   }
  // }
  
  // sgMail
  // .send(msg)
  // .then(() => {
  //   console.log('Email sent')
  // })
  // .catch((error) => {
  //   console.error(error)
  // })
};

const from = function(from, subject, body)
{
  let params = {
      Source: from,
      Destination: {
        ToAddresses: [
        
        ],
      },
      ReplyToAddresses: [],
      Message: {
        Body: {
          Text: {
            Charset: "UTF-8",
            Data: body
           }
        },
        Subject: {
          Charset: 'UTF-8',
          Data: subject,
        }
      },
    };

  var sendPromise = AWS_SES.sendEmail(params).promise();
  sendPromise.then(
    function(data) {
      console.log('Email sent')
      console.log(data.MessageId);
    }).catch(
      function(err) {
      console.error(err, err.stack);
    });



//Sendgrid

  // const msg = {
  //   to: Constants.SHAHADH_CONTACTUS_EMAIL, // Change to your recipient
  //   from: from, // Change to your verified sender
  //   subject: subject,
  //  // text: body,
  //   html: body,
  // }
  // sgMail
  // .send(msg)
  // .then(() => {
  //   console.log('Email sent')
  // })
  // .catch((error) => {
  //   console.error(error)
  // })
}

//--//
module.exports = {
  sendto,
  from
};
