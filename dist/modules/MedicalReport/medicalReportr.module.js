"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MedicalReportModule = void 0;
const auth_module_1 = require("../auth/auth.module");
const prisma_module_1 = require("../prisma/prisma.module");
const common_1 = require("@nestjs/common");
const user_module_1 = require("../user/user.module");
const prismaMedicalReportRepositoy_1 = require("./repository/implementations/prismaMedicalReportRepositoy");
const IMediclaReportRepository_1 = require("./repository/interface/IMediclaReportRepository");
const prismaAppointmentRepository_1 = require("../appointments/repository/implementations/prismaAppointmentRepository");
const IAppointmentRepository_1 = require("../appointments/repository/interface/IAppointmentRepository");
const create_medical_report_service_1 = require("./usecases/create/create-medical-report.service");
const findOne_medical_report_service_1 = require("./usecases/findOne/findOne-medical-report.service");
const create_medical_report_resolver_1 = require("./resolvers/create/create-medical-report.resolver");
const findOne_medical_report_resolver_1 = require("./resolvers/findOne/findOne-medical-report.resolver");
let MedicalReportModule = class MedicalReportModule {
};
exports.MedicalReportModule = MedicalReportModule;
exports.MedicalReportModule = MedicalReportModule = __decorate([
    (0, common_1.Module)({
        imports: [prisma_module_1.PrismaModule, auth_module_1.AuthModule, user_module_1.UserModule],
        providers: [
            create_medical_report_resolver_1.CreateMedicalReportResolver,
            findOne_medical_report_resolver_1.FindOneMedicalReportResolver,
            create_medical_report_service_1.CreateMedicalReportService,
            findOne_medical_report_service_1.FindOneMedicalReportService,
            {
                provide: IMediclaReportRepository_1.IMedicalReportRepository,
                useClass: prismaMedicalReportRepositoy_1.PrismaMedicalReportRepositoy,
            },
            {
                provide: IAppointmentRepository_1.IAppointmentRepository,
                useClass: prismaAppointmentRepository_1.PrismaAppointmentRepositoy,
            },
        ],
        exports: [],
    })
], MedicalReportModule);
//# sourceMappingURL=medicalReportr.module.js.map