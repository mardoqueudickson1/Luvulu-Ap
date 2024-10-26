"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendEmail = void 0;
const sendGridMail = require("@sendgrid/mail");
const errorsMessages_1 = require("../shared/errorsMessages");
const common_1 = require("@nestjs/common");
async function sendEmail({ to, from, templateId, dynamic_template_data, subject, }) {
    sendGridMail.setApiKey(process.env.SENDGRID_API_KEY);
    const msg = {
        to,
        from,
        templateId,
        dynamic_template_data,
        subject,
    };
    try {
        await sendGridMail.send(msg);
    }
    catch (error) {
        throw new common_1.BadRequestException(errorsMessages_1.messages.errorEmail);
    }
}
exports.sendEmail = sendEmail;
//# sourceMappingURL=send-email-service.js.map