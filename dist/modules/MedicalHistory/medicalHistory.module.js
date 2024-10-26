"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MedicalHistoryModule = void 0;
const prisma_module_1 = require("../prisma/prisma.module");
const common_1 = require("@nestjs/common");
const find_by_patientId_service_1 = require("./usecases/getByPatientId/find-by-patientId.service");
const find_by_doctorId_service_1 = require("./usecases/findByDoctorId/find-by-doctorId.service");
const findOne_medicalHistory_service_1 = require("./usecases/findOne/findOne-medicalHistory.service");
const findOne_notification_resolver_1 = require("./resolvers/findOne/findOne-notification.resolver");
const find_by_patientId_resolver_1 = require("./resolvers/findByPatientId/find-by-patientId.resolver");
const remove_medicalHistory_resolver_1 = require("./resolvers/remove/remove-medicalHistory.resolver");
const remove_historyMedical_service_1 = require("./usecases/remove/remove-historyMedical.service");
const find_by_doctorId_resolver_1 = require("./resolvers/findByDoctorId/find-by-doctorId.resolver");
const prismaMedicalHistoryRepository_1 = require("./repository/implementations/prismaMedicalHistoryRepository");
const IMedicalHistoryRepository_1 = require("./repository/interface/IMedicalHistoryRepository");
const find_by_patientId_resolver_2 = require("./resolvers/findByPatientIdPUB/find-by-patientId.resolver");
const find_by_patientId_service_2 = require("./usecases/getByPatientIdPUB/find-by-patientId.service");
let MedicalHistoryModule = class MedicalHistoryModule {
};
exports.MedicalHistoryModule = MedicalHistoryModule;
exports.MedicalHistoryModule = MedicalHistoryModule = __decorate([
    (0, common_1.Module)({
        imports: [prisma_module_1.PrismaModule],
        providers: [
            find_by_patientId_service_1.FindMedicalHistoryByPatientIdService,
            find_by_doctorId_service_1.FindMedicalHistoryByDoctorIdService,
            findOne_medicalHistory_service_1.FindOneMedicalHistoryService,
            remove_historyMedical_service_1.RemoveHistoryMedicalService,
            find_by_patientId_service_2.FindMedicalHistoryByPatientIdPUBService,
            findOne_notification_resolver_1.FindOneMedicalHistoryResolver,
            find_by_patientId_resolver_1.FindMedicalHistoryByPatientIdResolver,
            find_by_doctorId_resolver_1.FindMedicalHistoryByDoctoryIdResolver,
            remove_medicalHistory_resolver_1.RemoveMedicalHistoryResolver,
            find_by_patientId_resolver_2.FindMedicalHistoryByPatientIdPUBResolver,
            {
                provide: IMedicalHistoryRepository_1.IMedicalHistoryRepository,
                useClass: prismaMedicalHistoryRepository_1.PrismaMedicalHistoryRepositoy,
            },
        ],
        exports: [],
    })
], MedicalHistoryModule);
//# sourceMappingURL=medicalHistory.module.js.map