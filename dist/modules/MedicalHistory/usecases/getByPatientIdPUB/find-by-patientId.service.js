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
exports.FindMedicalHistoryByPatientIdPUBService = void 0;
const errorsMessages_1 = require("../../../../utils/shared/errorsMessages");
const common_1 = require("@nestjs/common");
const IMedicalHistoryRepository_1 = require("../../repository/interface/IMedicalHistoryRepository");
const findPhotoFile_1 = require("../../../../utils/shared/providers/storageProviders/implementations/supaBase/findPhotoFile");
let FindMedicalHistoryByPatientIdPUBService = class FindMedicalHistoryByPatientIdPUBService {
    constructor(repo) {
        this.repo = repo;
    }
    async execute(id) {
        const medicalHistory = await this.repo.getMedicalHistoryByPatientId(id);
        for (const history of medicalHistory) {
            if (history.doctor.avatar !== null) {
                const url = await findPhotoFile_1.findSupabaseFileService.getPhotoUrl(history.doctor.avatar);
                history.doctor.avatar = url.toString();
            }
        }
        if (medicalHistory.length <= 0) {
            throw new common_1.NotFoundException(errorsMessages_1.messages.medicalHistoryNotFound);
        }
        return medicalHistory;
    }
};
exports.FindMedicalHistoryByPatientIdPUBService = FindMedicalHistoryByPatientIdPUBService;
exports.FindMedicalHistoryByPatientIdPUBService = FindMedicalHistoryByPatientIdPUBService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [IMedicalHistoryRepository_1.IMedicalHistoryRepository])
], FindMedicalHistoryByPatientIdPUBService);
//# sourceMappingURL=find-by-patientId.service.js.map