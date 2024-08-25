/*******************************************************/
// Importing Files.
/*******************************************************/
const models = require("../../../database/sequelize/sequelize");
const database = require("../calls/databaseRequest");
const {manageRoomOccupancy, manageChildBookingAndSessionLog }  = require ('../../controllers/admin/child/childSessionBooking')
/*******************************************************/
// Importing Npm Modules.
/*******************************************************/
const operator = require('sequelize').Op;
const moment = require("moment")

/*******************************************************/
// Cron Jobs.
/*******************************************************/

/**
 * Cron-Job: It is used to message message to the campaign particiapnts.
 */
const endChildSessionBooking = async () => {
const childsBookingDetail = await database.fetch(models.childBookingDetail , {where:{
  leavingDate:{
      [operator.lt]: moment().format('YYYY-MM-DD')
  },      
} })

//Mujtaba bro code
// for (let childBookingDetail of childsBookingDetail){
//   let childInfo = await database.findById(models.child, childBookingDetail.childId);
//       childInfo.activeBooking = false;
//       await database.save(childInfo);
//       let existingChildBookingSession = await database.fetch(models.childBookingSessionDetail, { where: { childId: childInfo.id } });
//       manageRoomOccupancy(childBookingDetail.roomId, existingChildBookingSession);
//       manageChildBookingAndSessionLog(childBookingDetail, existingChildBookingSession);
//       await database.remove_v2(childBookingDetail);
//       await database.bulkUpdate(models.childBookingSessionDetail, { isDeleted: 1, deletedTime: moment().unix() }, { childInfo: childId }, true);
// }

for (let childBookingDetail of childsBookingDetail){
  let childInfo = await database.findById(models.child, childBookingDetail.childId);
      if(childInfo)
      {
        childInfo.activeBooking = false;
        await database.save(childInfo);
        //let existingChildBookingSession = await database.fetch(models.childBookingSessionDetail, { where: { childId: childInfo.id } });
        // usman changes for multiple bookings as above code deleted all bookings session
        let existingChildBookingSession = await database.fetch(models.childBookingSessionDetail, { where: { childId: childInfo.id,childBookingDetailId:childBookingDetail.id } });
        manageRoomOccupancy(childBookingDetail.roomId, existingChildBookingSession);
        manageChildBookingAndSessionLog(childBookingDetail, existingChildBookingSession);
        
        // change by usman
        childBookingDetail.isDeleted = true
        childBookingDetail.deletedTime = moment().unix()
        //the reason of change
        childBookingDetail.isDeletedDueToEdit = true
        await database.save(childBookingDetail)
        
        //await database.remove_v2(childBookingDetail);
        
        await database.bulkUpdate(models.childBookingSessionDetail, { isDeleted: 1, deletedTime: moment().unix() }, { childId: childBookingDetail.childId,childBookingDetailId:childBookingDetail.id  }, true);
      }
}



}
module.exports = {
  endChildSessionBooking
}
