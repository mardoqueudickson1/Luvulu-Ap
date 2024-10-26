"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PasswordConfirmationService = void 0;
const common_1 = require("@nestjs/common");
const IConfirmationCode_1 = require("../../repository/interfaces/IConfirmationCode");
let PasswordConfirmationService = class PasswordConfirmationService {
    constructor(confirmationRepo) {
        this.confirmationRepo = confirmationRepo;
    }
    async generateConfirmationCode(user) {
        const code = generateUniqueCode();
        const expirationTime = new Date();
        expirationTime.setMinutes(expirationTime.getMinutes() + 10);
        return code;
    }
    async verifyConfirmationCode(userId, code) {
        await this.confirmationRepo.verifyConfirmationCode(userId, code);
        return true;
    }
};
exports.PasswordConfirmationService = PasswordConfirmationService;
exports.PasswordConfirmationService = PasswordConfirmationService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [IConfirmationCode_1.IConfirmationCodeRepository])
], PasswordConfirmationService);
async function generateUniqueCode() {
    const codeLength = 6;
    let code = '';
    for (let i = 0; i < codeLength; i++) {
        const digit = Math.floor(Math.random() * 10);
        code += digit.toString();
    }
    return code;
}
//# sourceMappingURL=PasswordConfirmation.service.js.map