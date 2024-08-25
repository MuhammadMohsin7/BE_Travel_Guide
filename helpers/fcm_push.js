// let FCM = require("fcm-node");
// let serverKey = ""//put your server key here

// switch (process.env.ENV) {
//     case "development":
//         serverKey = process.env.FCM_SERVER_KEY_DEVELOPMENT;
//       break;
//     case "staging":
//         serverKey = process.env.FCM_SERVER_KEY_STAGING;
//       break;
//     case "production":
//         serverKey = process.env.FCM_SERVER_KEY_PRODUCTION;
//       break;
//   }
// let fcm = new FCM(serverKey);
// const sendPushNotification = (title,message,deviceToken,pushType="general",badge=0) =>{
//     let fcmMessage = {
//         to: deviceToken,
//         // data: {
//         //   title: title,
//         //   body: message
//         // },
//         notification: {
//           title: title,
//           body: message,
//           pushType: pushType,
//           badge: badge,
//         },
//       };
//       fcm.send(fcmMessage, async function (err, response) {
//         //console.log("the response of the noti firebase ### ### ##3");
//         if (err) {
//           console.log('IN ERROR ==== >> ',{err,deviceToken});
//         } else {
//           // NOTIFICATION SENT
//           console.log('=== >>> PUSH SENT  ==== >> ',response)
//         }
//       });
// }
// module.exports = {
//     sendPushNotification
// }