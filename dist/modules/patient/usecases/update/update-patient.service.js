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
exports.UpdatePatientService = void 0;
const common_1 = require("@nestjs/common");
const IPatientRepository_1 = require("../../repository/interface/IPatientRepository");
const errorsMessages_1 = require("../../../../utils/shared/errorsMessages");
let UpdatePatientService = class UpdatePatientService {
    constructor(repo) {
        this.repo = repo;
    }
    async update(data) {
        try {
            const patient = await this.repo.update(data);
            return patient;
        }
        catch (error) {
            throw new common_1.BadRequestException(errorsMessages_1.messages.errorServer);
        }
    }
    async getPatientID(patientId) {
        const patient = await this.repo.findPatientByUserId(patientId);
        return patient;
    }
};
exports.UpdatePatientService = UpdatePatientService;
exports.UpdatePatientService = UpdatePatientService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [IPatientRepository_1.IPatientRepository])
], UpdatePatientService);
//# sourceMappingURL=update-patient.service.js.map