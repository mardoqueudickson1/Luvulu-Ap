"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendSms = void 0;
const common_1 = require("@nestjs/common");
const twilio = require("twilio");
const errorsMessages_1 = require("../shared/errorsMessages");
async function sendSms(phones, message) {
    try {
        const twillioToken = process.env.TWILIO_AUTH_TOKEN;
        const twilioID = process.env.TWILIO_ACCOUNTS_ID;
        const twilioPhoneNumber = process.env.TWILIO_PHONE_NUMBER;
        const client = twilio(twilioID, twillioToken);
        await client.messages.create({
            body: message,
            from: twilioPhoneNumber,
            to: phones,
        });
    }
    catch (error) {
        throw new common_1.BadRequestException(errorsMessages_1.messages.errorSMS);
    }
}
exports.sendSms = sendSms;
//# sourceMappingURL=send-sms-service.js.map