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
exports.UpdatePatientAvatarService = void 0;
const common_1 = require("@nestjs/common");
const IPatientRepository_1 = require("../../../patient/repository/interface/IPatientRepository");
const errorsMessages_1 = require("../../../../utils/shared/errorsMessages");
const IstorageProvider_1 = require("../../../../utils/shared/providers/storageProviders/interfaces/IstorageProvider");
let UpdatePatientAvatarService = class UpdatePatientAvatarService {
    constructor(patientRepo, storageProviderRepo) {
        this.patientRepo = patientRepo;
        this.storageProviderRepo = storageProviderRepo;
    }
    async execute(patientId, data) {
        const patient = await this.patientRepo.findById(patientId);
        if (!patient) {
            throw new common_1.NotFoundException(errorsMessages_1.messages.onlyAuthUser);
        }
        if (patient.user.avatar) {
            await this.storageProviderRepo.deleteFile(data);
        }
        const fileName = await this.storageProviderRepo.saveFile(data);
        patient.user.avatar = fileName.path;
        const updatedPatient = await this.patientRepo.update(patient);
        if (!updatedPatient) {
            throw new common_1.NotFoundException('Paciente não encontrado após a atualização');
        }
        return updatedPatient;
    }
    async getPatientID(patientId) {
        const patient = await this.patientRepo.findPatientByUserId(patientId);
        return patient;
    }
};
exports.UpdatePatientAvatarService = UpdatePatientAvatarService;
exports.UpdatePatientAvatarService = UpdatePatientAvatarService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [IPatientRepository_1.IPatientRepository,
        IstorageProvider_1.IStorageProvider])
], UpdatePatientAvatarService);
//# sourceMappingURL=update-patient-avatar.service.js.map