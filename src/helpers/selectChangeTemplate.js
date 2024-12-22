import { Change_Email_Template } from "../utils/nodemailer/template/user/changeEmailTemplate.js";
import { Change_Password_Template } from "../utils/nodemailer/template/user/changePasswordTemplate.js";
import { Change_Username_Template } from "../utils/nodemailer/template/user/changeUsernameTemplate.js";

const selectChangeTemplate = (changeType) => {
    if (changeType === "email") {
        return Change_Email_Template;
    } else if (changeType === "password") {
        return Change_Password_Template;
    } else if (changeType === "username") {
        return Change_Username_Template;
    }
};

export default selectChangeTemplate;