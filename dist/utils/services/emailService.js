"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SendMailService = void 0;
const common_1 = require("@nestjs/common");
const sendGridMail = require("@sendgrid/mail");
const errorsMessages_1 = require("../shared/errorsMessages");
let SendMailService = class SendMailService {
    async execute({ to, subject, html, text }) {
        try {
            sendGridMail.setApiKey(process.env.SENDGRID_API_KEY ?? '');
            await sendGridMail.send({
                to,
                from: `Luvulu <${process.env.EMAIL_FROM}>`,
                subject,
                text,
                html,
            });
            return true;
        }
        catch (error) {
            throw new common_1.InternalServerErrorException(errorsMessages_1.messages.errorEmail);
        }
    }
};
exports.SendMailService = SendMailService;
exports.SendMailService = SendMailService = __decorate([
    (0, common_1.Injectable)()
], SendMailService);
//# sourceMappingURL=emailService.js.map