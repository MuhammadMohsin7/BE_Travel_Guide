const constants = {
  CONTACT_SUPERADMIN: "Please contact super admin to proceed",








  LOGGED_IN: "Logged in to the system successfully",
  LOGGED_OUT: "Logged out successfully",


  DATA_FETCHED: "Data fetched successfully",
  DATA_CREATED: "Data created successfully",
  DATA_UPDATED: "Data updated successfully",
  DATA_DELETED: "Data deleted successfully",

  DATA_REMOVED: "Data removed successfully",
  DATA_ADDED: "Data added successfully",

  EMAIL_ALREADY_EXIST: "Email already exist. Try another one",
  DATA_NOT_AVAILABLE: "Data not available",

  PHONE_ALREADY_EXIST: "Mobile number already exist",


  AUTHORIZATION_FAILED: "Invalid Credentials",

  EMAIL_SENT: "Email sent successfully",
  FORGOT_PASSWORD_EMAIL_SENT: "A link has been sent to your email address, open the link to reset your password",
  PASSWORD_RESET_SUCCESSFULLY: "Password has been updated",

  PASSWORD_NOT_MATCHED: "Password did not matched",


  OTP_SENT: "OTP is sent to your email address",
  INCORRECT_OTP: "Your OTP is incorrect",

  BRANCH_ALREADY_ASSIGNED: "This branch is already assigned to given supervisor",
  BRANCH_ALREADY_RESIGNED: "This branch is already resigned from given supervisor",
  BRANCH_ASSIGNED_SUCCESSFULLY: "This branch is successfully assigned to given supervisor",
  BRANCH_RESIGNED_SUCCESSFULLY: "This branch is successfully resigned from given supervisor",

  BRANCHES_ASSIGNED_SUCCESSFULLY: "These branches are successfully assigned to given supervisor",



  EVENT_SESSION_REGISTERED_SUCCESSFULLY: "Event Session Registered Successfully",

  EVENT_SESSION_ATTENDANCE_SUCCESSFULLY: "Event Session Attendance Marked Successfully",

  EMAIL_ALREADY_REGISTERED: "This email is already registered",

  ALREADY_REGISTERED_FOR_THIS_EVENT: "This email is already registered for this event",


  ATTENDEE_REMOVED: "Attendee Removed",
  ATTENDANCE_MARKED: "Attendance Marked",


  SEATS_UNAVAILABLE: "Seats are not available for this session",


  FILE_CREATED_SUCCESSFULLY: "File created successfully",

  EMAIL_OR_ID_IS_MISSING: "Email or id is missing",

  CERTIFICATES_ISSUED: "Certificates are issued",

  CERTIFICATE_SENT: "Certificate sent",
  CERTIFICATE_NOT_GENERATED: "Certificate not generated for this session",

  CERTIFICATES_ALREADY_ISSUED: "Certificates are already issued for this session",

  CERTIFICATE_NOT_AVAILABLE: "Certificate not available",

  BUNDLE_PURCHASE_OR_PACKAGE_PURCHASE_MISSING: "bundle_purchase or package_purchase is missing",
  PACKAGE_ID_MISSING: "package_id is missing",
  PACKAGE_TYPE_MISSING: "package_type is missing",

  PAYMENT_SUCCESSFUL: "Payment Successful",
  PAYMENT_UNSUCCESSFUL: "Payment Unsuccessful",

  NO_OF_CERTIFICATES_MISSING: "no_of_certificates is missing",



  CANNOT_PURCHASE_BUNDLE: "You cannot purchase this amount of certificates",

  NEW_PASSWORD_MISSING: "new_password key missing",
  OLD_PASSWORD_MISSING: "old_password key missing",

  INVALID_DATA_CSV: "CSV file data is not valid",

  SOME_INVALID_DATA_CSV: "CSV file has some invalid data, correct data is saved successfully",


  CONTACT_TECHNICAL_TEAM: "You cannot change your password. Please contact technical team",



  FEEDBACK_ALREADY_ADDED: "Feedback is already added",

  OTHER_CERTIFICATE_LIMIT_EXCEED: "You can not add more non-shahadh certificates",

  PRIVATE_INDIVIDUAL: "This user has private profile",


  INCORRECT_PASSWORD: "Incorrect Password",
  INCORRECT_EMAIL: "Incorrect Email",

  ORGANIZATION_ENABLED: "Organization has been enabled",
  ORGANIZATION_DISABLED: "Organization has been disabled",

  BUNDLE_CREATED: "Bundle has been created",
  BUNDLE_UPDATED: "Bundle has been updated",

  BUNDLE_ENABLED: "Bundle has been enable",
  BUNDLE_DISABLED: "Bundle has been Disable",

  TEMPLATE_SET_DEFAULT: "Template has been set as default",
  TEMPLATE_UNSET_DEFAULT: "Template has been removed as default",

  NOTIFICATION_SENT: "Notification has been sent",

  INDIVIDUAL_UNBLOCKED: "The individual has been unblocked",
  INDIVIDUAL_BLOCKED: "The individual has been blocked",


  INDIVIDUAL_DEACTIVATED: "The individual account has been deactivated",
  INDIVIDUAL_ACTIVATED: "The individual account has been activated",


  FAQ_ADDED: "The FAQ has been added",
  FAQ_UPDATED : "FAQ has been updated",
  FAQ_DELETED:"FAQ has been deleted",


  FAQ_FILE_DELETED: "The file has been deleted",


  SUPERVISOR_DELETED: "The supervisor has been deleted",

  SUPERVISOR_ARCHIVED: "The supervisor has been archived",
  SUPERVISOR_UNARCHIVED: "The supervisor has been unarchived",


  EVENT_ARCHIVED: "The event has been archived",
  EVENT_UNARCHIVED: "The event has been unarchived",


  SESSION_ARCHIVED: "The group has been archived",
  SESSION_UNARCHIVED: "The group has been unarchived",


  INDIVIDUAL_REGISTRATION_DELETED: "The individual's registration has been deleted",

  INDIVIDUAL_PROFILE_UPDATED: "Profile has been updated",

  QUERY_SUBMITTED: "Your query has been submitted",



  VALIDATION_ERROR: "Request send with incorrect or missing data.",



  PURCHASE_PACKAGE: "You are subscribed to free package, this feature is not available in free package.",


  PACKAGE_ACCESS_FAILED: "This feature is not available in this package",


  PURCHASE_BANK_TRANSFER: "Your request for package upgrade is successfully sent. Kindly transfer the amount in Shahadh Bank to confirm your package upgradation",

  CERTIFICATES_BANK_TRANSFER: "Your request for certificate purchase is successfully sent. Kindly transfer the amount in Shahadh Bank to confirm your certificate purchase",


  ALL_CERTIFICATE_TEMPLATES_USED: "You have utilized all the certificates templates given in your package",


  SKILL_CREATED : "Skill added",

  SKILL_EXISTS: "Skill already exists",

EMAIL_VERIFIED: "Email Verified",

LINK_EXPIRED: "This link has been expired",


SESSION_CANNOT_ARCHIVED: "The group cannot be archived",

ATTENDANCE_LINK_NOT_DELETED: "Attendance link couldn't be deleted",
ATTENDANCE_ALREADY_MARKED: "You have already marked you attendance for this event",
ATTENDANCE_ALREADY_MARKED_ORG: "Attendance of this individual is already marked",

USER_ADDED_BUT_NOT_REGISTERED_TO_SESSION: "Right now all seats of this event are booked, a verification link has been sent to your registered email , please verify your email, so we can send you the upcoming event details and registered you in our system, so next time you dont need any verification.",
SEATS_BOOKED_AND_LET_YOU_KNOW:"Right now all seats are booked, we will let you know  if this event occur again",


NOT_REGISTERED_TO_SESSION:"You are not register in this event",




LINK_EXPIRED: "This link is invalid, not started yet or has been expired",



ACCESS_DENIED_ORG_STATUS: "You don't have access at the moment, the organization has been disabled",

ACCESS_DENIED_ORG_FREE_PACKAGE: "You don't have access at the moment, your organization has not purchased the package",



SOMETHING_WENT_WRONG: "Something went wrong",







  /////////////////////////////////
  ROUTE_NOT_AVAILABLE: "Requested route is not available",
  UN_AUTHORIZED_USER: "Unauthorized user , you can not access the route.",
  ROUTE_FORBIDDEN: "You don't have the priviledge to access this route.",
  PASSWORD_MISMATCH: "Current password is not correct.",

  PIN_SET_SUCCESSFULLY: "Pin set successfully ",
 
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
  CHILD_BOOKING_UPDATED_SUCCESSFULLY: "Child booking updated successfully.",
  CHILD_BOOKING_SESSION_DELETED: "Child booking deleted successfully",
  CHILD_ADDITIONAL_ITEM_DETAIL_ADDED: "Childs additional item added successfully",
  CHILD_ADDITIONAL_ITEM_DETAIL_UPDATED: "Child additional item updated successfully",
  CHILD_ADDITIONAL_ITEM_DETAIL_REMOVED: "Child additional item removed successfully",
  CHILD_ATTENDANCE_NOT_AVAILABLE: "Child attendance not available",
  CHILD_ATTENDANCE_ADDED_SUCCESSFULLY: "Child attendance added successfully",
  CHILD_CREDIT_REMOVED: "Child Credit  removed successfully",
  CHILD_CREDIT_ADDED_SUCCESSFULLY: "Child credit added sucessfully",
  CHILD_CREDIT_UPDATED_SUCCESSFULLY: "Child credit updated successfully",

  //Usman Work for email validation
  EMAIL_EXISTS: "EMAIL_EXISTS",
  EMAIL_DOES_NOT_EXISTS: "This user does not exists in stars day nursery. Please contact your admin",
  INCOMPLETE_INFORMATION: "This user does not exists in stars day nursery",
  STAFF_SHIFT_PATTERN: "Staff shift pattern exists",
  STAFF_SHIFT_DOES_NOT_PATTERN: "Your shift does not exist for today",
  STAFF_ATTENDANCE_ADDED_SUCCESSFULLY: "Staff attendance added successfully",
  FUNDING_NOT_AVAILABLE: "Please select child funding to continue.",
  FILE_CREATED_SUCCESSFULLY: "File created successfully",
  ROOM_MUST_BE_OF_PREVIOUS_BOOKING: "Room must be same as of previous booking.",
  //TIME_SLOT_ALREADY_BOOKED : "The given time slots are already booked in any other booking.",
  TIME_SLOT_ALREADY_BOOKED: "The child is already booked for this session.",

  CAN_NOT_BE_LOGGED_IN: "Your access has been revoked. Please contact admin",
  INVOICE_REMOVED: "Invoice removed successfully.",
  INVOICE_GENERATED: "Draft invoice(s) has been generated successfully.",
  CSV_GENERATED: "CSV downloaded successfully.",
  DISCREPANCY_REMOVED: "Discrepancy removed successfully.",
  UPDATED_SUCCESSFULLY: "Updated successfully.",
  DOMAIN_IS_INVALID: "This app may be risky. If you trust this app, please ask your admin to grant you access.",
  PERSONAL_EMAIL_NOT_UNIQUE: "Personal email is not unique.",
  EMAIL_AND_PERSONAL_EMAIL_CANNOT_BE_SAME: "Email and Personal email can not be same."
};
module.exports = function (key) {
  return constants[key];
};