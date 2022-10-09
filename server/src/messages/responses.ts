const ERRORS = {
  EMAIL_IN_USE: "E-mail already in use",
  NO_CONTACT_FOUND: "No contact found with this credentials",
  NO_JWT_SECRET_FOUND: "No jwt secret was found on the env",
  WRONG_CREDENTIALS: "Invalid email or password",
};

const SUCCESS = {
  DELETED_CONTACT: "Account deleted",
  AUTH_SUCCESS: "Successfully authenticated"
};

export { ERRORS, SUCCESS };
