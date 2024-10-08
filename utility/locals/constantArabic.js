const constants = {

  LOGGED_IN: "Logged in to the system successfully In Arabic",
  DATA_FETCHED: "Data fetched successfully In Arabic",

  AUTHORIZATION_FAILED: "Invalid Credentials / Code",

  ROUTE_NOT_AVAILABLE: "Requested route is not available",
  UN_AUTHORIZED_USER: "Unauthorized user , you can not access the route.",
  ROUTE_FORBIDDEN: "You don't have the priviledge to access this route.",
  PASSWORD_MISMATCH: "Current password is not correct.",
  DATA_NOT_AVAILABLE: "Data not available.",
  PIN_SET_SUCCESSFULLY: "Pin set successfully ",
  VALIDATION_ERROR: "Request send with incorrect or missing data. ",
  FILE_FORMAT_NOT_SUPPORTED: "Error while uploading image as this file extension is not supported.",
  FILE_TOO_LARGE: "Error while uploading image as image size is too large. Max File size should not be greater then 4mb.",
  SERVER_ERROR: "Unknown Server Error.",
  FETCH_SUCCESSFULLY: "Records fetched successfully.",
  REGISTRATION_NUMBER_AND_CONTACT_NUMBER_NOT_UNIQUE: "Registration Number and Contact Number of a branch is already in use",
  REGISTRATION_NUMBER_NOT_UNIQUE: "Registration Number of a branch is already in use",
  CONTACT_NUMBER_NOT_UNIQUE: "Contact Number of a branch is already in use",
BRANCH_ADDED: "Branch added successfully.",
  BRANCH_UPDATED: "Branch updated  successfully.",
  BRANCH_STATUS_UPDATED: "Branch status updated successfully .",
  BRANCH_REMOVED: "Branch removed successfully.",
  ROOM_ADDED: "Room added successfully.",
  ROOM_UPDATED: "Room updated  successfully.",
  ROOM_STATUS_UPDATED: "Room status updated successfully .",
  ROOM_REMOVED: "Room removed successfully.",
  ROOM_NAME_NOT_UNIQUE: "Room Name of a branch is already in use",
  SESSION_ADDED: "Session added successfully.",
  SESSION_UPDATED: "Session updated  successfully.",
  SESSION_STATUS_UPDATED: "Session status updated successfully .",
  SESSION_REMOVED: "Session Information removed successfully.",
  SESSION_NAME_NOT_UNIQUE: "Session Name of a branch is already in use",
  SESSION_PRICING_ADDED: "Session Pricing added successfully.",
  SESSION_PRICING_UPDATED: "Session Pricing updated successfully.",
  EVENT_ADDED: "Calendar event added successfully",
  EVENT_UPDATED: "Calendar event updated successfully",
  EVENT_STATUS_UPDATED: "Calendar event status updated successfully",
  EVENT_REMOVED: "Calendar event removed successfully",
  NO_TERM_AVAILABLE: "No term available during the duration. Please try again.",
  STAFF_ADDED: "Personal Information added successfully",
  STAFF_UPDATED: "Personal Information updated successfully",
  STAFF_STATUS_UPDATED: "Staff member status updated sucessfully. ",
  STAFF_REMOVED: "Staff member removed successfully",
  STAFF_SYSTEM_PRIVILEDGES_AVAILABLE: "Staff system priviledges already available",
  STAFF_SYSTEM_PRIVILEDGES__ADDED: "Staff system priviledges added successfully",
  EMAIL_AND_MOBILE_NUMBER_AND_TELEPHONE_NUMBER_AND_NATIONAL_INSURANCE_NUMBER_NOT_UNIQUE: "email, mobile number, telephone number and national insurance number are not unique",
  EMAIL_AND_MOBILE_NUMBER_AND_TELEPHONE_NUMBER_NOT_UNIQUE: "email, mobile number and telephone number are not unique",
  EMAIL_AND_MOBILE_NUMBER_AND_NATIONAL_INSURANCE_NUMBER_NOT_UNIQUE: "email, mobile number and national insurance number are not unique",
  EMAIL_AND_TELEPHONE_NUMBER_AND_NATIONAL_INSURANCE_NUMBER_NOT_UNIQUE: "email,telephone number and national insurance number are not unique",
  MOBILE_NUMBER_AND_TELEPHONE_NUMBER_AND_NATIONAL_INSURANCE_NUMBER_NOT_UNIQUE: "mobile number, telephone number and national insurance number are not unique",
  EMAIL_AND_NATIONAL_INSURANCE_NUMBER_NOT_UNIQUE: "email and national insurance number are not unique",
  EMAIL_AND_MOBILE_NUMBER_NOT_UNIQUE: "email and mobile number are not unique",
  EMAIL_AND_TELEPHONE_NUMBER_NOT_UNIQUE: "email and telephone number are not unique",
  MOBILE_NUMBER_AND_TELEPHONE_NUMBER_NOT_UNIQUE: "mobile number and telephone number are not unique",
  TELEPHONE_NUMBER_AND_NATIONAL_INSURANCE_NUMBER_NOT_UNIQUE: "telephone number and national insurance number are not unique",
  MOBILE_NUMBER_AND_NATIONAL_INSURANCE_NUMBER_NOT_UNIQUE: "mobile number and national insurance number are not unique",
  EMAIL_NOT_UNIQUE: "email is not unique",
  MOBILE_NUMBER_NOT_UNIQUE: "mobile number is not unique",
  TELEPHONE_NUMBER_NOT_UNIQUE: "telephone number is not unique",
  NATIONAL_INSURANCE_NUMBER_NOT_UNIQUE: "national insurance number is not unique",
  BIRTH_CERTIFICATE_NUMBER_NOT_UNIQUE: "Birth Certifcate Number is not unique",
  PASSPORT_NUMBER_NOT_UNIQUE: "Passport Number is not unique",
  STAFF_CONTRACT_AND_PROBATION_ADDED: "Contract Settings added successfully",
  STAFF_CONTRACT_ALREADY_AVAILABLE: "Contract settings already available",
  STAFF_CONTRACT_AND_PROBATION_UPDATED: "Contract Settings updated successfully",
  STAFF_SHIFT_PATTERN_ADDED: "Shift Pattern added successfully.",
  STAFF_SHIFT_PATTERN_AVAILABLE: "Shift Pattern already available.",
  STAFF_SHIFT_PATTERN_UPDATED: "Shift Pattern updated successfully",
  STAFF_SHIFT_PATTERN_DELETED: "Shift Pattern deleted successfully.",
  STAFF_EMERGENCY_DETAIL_REMOVED: "Staff emergency detail deleted successfully",
  STAFF_EMERGENCY_DETAIL_CAN_NOT_BE_REMOVED: "Staff primary emergency details can not be deleted",
  STAFF_EMERGENCY_CONTACT_MOBILE_NUMBER_NOT_UNIQUE: "Mobile number used in the emergency details is already in used. Please enter another number.",
  CHILD_ADDED: "Child has been added successfully",
  CHILD_UPDATED: "Child has been updated successfully",
  CHILD_REMOVED: "Child has been removed successfully",
  CHILD_GUARDIAN_DETAIL_ADDED: "Child guardian added successfully",
  CHILD_GUARDIAN_DETAIL_UPDATED: "Child guardian updated successfully",
  CHILD_GUARDIAN_DETAIL_REMOVED: "Child guardian deleted successfully",
  CHILD_GUARDIAN_DETAIL_CAN_NOT_BE_REMOVED: "Child guardian detail can not be deleted",
  CHILD_EMERGENCY_DETAIL_ADDED: "Child emergency detail added successfully",
  CHILD_EMERGENCY_DETAIL_UPDATED: "Child emergency detail updated successfully",
  CHILD_EMERGENCY_DETAIL_REMOVED: "Child emergency detail removed successfully",
  CHILD_EMERGENCY_DETAIL_CAN_NOT_BE_REMOVED: "Child emergency detail can not be removed",
  CHILD_MEDICAL_INFORMATION_ADDED: "Child medical information added successfully",
  CHILD_MEDICAL_INFORMATION_UPDATED: "Child medical information updated successfully",
  CHILD_FINANCE_DETAIL_ADDED: "Child finance details added successfully",
  CHILD_FINANCE_DETAIL_UPATED: "Child finance details updated successfully",
  CHILD_BOOKING_ADDED_SUCCESSFULLY: "Child booking added successfully.",
  CHILD_BOOKING_SESSION_AVAILABLE: "Child Booking session already available.",
  CHILD_BOOKING_UPDATED_SUCCESSFULLY:"Child booking updated successfully.",
  CHILD_BOOKING_SESSION_DELETED: "Child booking deleted successfully",
  CHILD_ADDITIONAL_ITEM_DETAIL_ADDED:"Childs additional item added successfully",
  CHILD_ADDITIONAL_ITEM_DETAIL_UPDATED:"Child additional item updated successfully",
  CHILD_ADDITIONAL_ITEM_DETAIL_REMOVED: "Child additional item removed successfully",
  CHILD_ATTENDANCE_NOT_AVAILABLE: "Child attendance not available",
  CHILD_ATTENDANCE_ADDED_SUCCESSFULLY: "Child attendance added successfully",
  CHILD_CREDIT_REMOVED: "Child Credit  removed successfully",
  CHILD_CREDIT_ADDED_SUCCESSFULLY: "Child credit added sucessfully",
  CHILD_CREDIT_UPDATED_SUCCESSFULLY: "Child credit updated successfully",

  //Usman Work for email validation
  EMAIL_EXISTS:"EMAIL_EXISTS",
  EMAIL_DOES_NOT_EXISTS:"This user does not exists in stars day nursery. Please contact your admin",
  INCOMPLETE_INFORMATION:"This user does not exists in stars day nursery",
  STAFF_SHIFT_PATTERN: "Staff shift pattern exists",
  STAFF_SHIFT_DOES_NOT_PATTERN: "Your shift does not exist for today",
  STAFF_ATTENDANCE_ADDED_SUCCESSFULLY:"Staff attendance added successfully",
  FUNDING_NOT_AVAILABLE: "Please select child funding to continue.",
  FILE_CREATED_SUCCESSFULLY: "File created successfully",
  ROOM_MUST_BE_OF_PREVIOUS_BOOKING: "Room must be same as of previous booking.",
  //TIME_SLOT_ALREADY_BOOKED : "The given time slots are already booked in any other booking.",
  TIME_SLOT_ALREADY_BOOKED : "The child is already booked for this session.",
 
  CAN_NOT_BE_LOGGED_IN: "Your access has been revoked. Please contact admin",
  INVOICE_REMOVED : "Invoice removed successfully.",
  INVOICE_GENERATED: "Draft invoice(s) has been generated successfully.",
  CSV_GENERATED: "CSV downloaded successfully.",
  DISCREPANCY_REMOVED: "Discrepancy removed successfully.",
  UPDATED_SUCCESSFULLY: "Updated successfully.",
  DOMAIN_IS_INVALID : "This app may be risky. If you trust this app, please ask your admin to grant you access.",
  PERSONAL_EMAIL_NOT_UNIQUE: "Personal email is not unique.",
  EMAIL_AND_PERSONAL_EMAIL_CANNOT_BE_SAME: "Email and Personal email can not be same."
};
module.exports = function (key) {
  return constants[key];
};