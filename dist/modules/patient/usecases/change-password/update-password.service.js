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
exports.UpdatePasswordService = void 0;
const common_1 = require("@nestjs/common");
const IPatientRepository_1 = require("../../repository/interface/IPatientRepository");
const utils_1 = require("../../../../utils/utils");
const errorsMessages_1 = require("../../../../utils/shared/errorsMessages");
let UpdatePasswordService = class UpdatePasswordService {
    constructor(repo) {
        this.repo = repo;
    }
    async update(data) {
        const patient = await this.repo.findById(data.patientId);
        if (!patient) {
            throw new common_1.UnauthorizedException(errorsMessages_1.messages.patientNotFound);
        }
        const patientPassword = patient.user.password;
        const isOldPasswordValid = (0, utils_1.comparePassword)(data.oldPassword, patientPassword);
        if (!isOldPasswordValid) {
            throw new common_1.UnauthorizedException(errorsMessages_1.messages.passwordInvalid);
        }
        const newPasswordHash = await (0, utils_1.generateHash)(data.newPassword);
        return await this.repo.updatePassword({
            patientId: data.patientId,
            oldPassword: patientPassword,
            newPassword: newPasswordHash,
        });
    }
    async getPatientID(patientId) {
        const patient = await this.repo.findPatientByUserId(patientId);
        return patient;
    }
};
exports.UpdatePasswordService = UpdatePasswordService;
exports.UpdatePasswordService = UpdatePasswordService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [IPatientRepository_1.IPatientRepository])
], UpdatePasswordService);
//# sourceMappingURL=update-password.service.js.map