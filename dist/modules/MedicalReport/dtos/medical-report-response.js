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
exports.MedicalReportResponse = exports.DoctorClinicInfo = exports.PacientInfo = exports.MedicalReportType = void 0;
const graphql_1 = require("@nestjs/graphql");
let MedicalReportType = class MedicalReportType {
};
exports.MedicalReportType = MedicalReportType;
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], MedicalReportType.prototype, "AppointmentId", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], MedicalReportType.prototype, "institutionId", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], MedicalReportType.prototype, "doctorId", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], MedicalReportType.prototype, "patientId", void 0);
exports.MedicalReportType = MedicalReportType = __decorate([
    (0, graphql_1.InputType)()
], MedicalReportType);
let PacientInfo = class PacientInfo {
};
exports.PacientInfo = PacientInfo;
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], PacientInfo.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], PacientInfo.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], PacientInfo.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Date)
], PacientInfo.prototype, "birthday", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], PacientInfo.prototype, "nationality", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], PacientInfo.prototype, "phone", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], PacientInfo.prototype, "FatherName", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], PacientInfo.prototype, "MotherName", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], PacientInfo.prototype, "neigbhod", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], PacientInfo.prototype, "gender", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], PacientInfo.prototype, "city", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], PacientInfo.prototype, "municipality", void 0);
exports.PacientInfo = PacientInfo = __decorate([
    (0, graphql_1.ObjectType)()
], PacientInfo);
let DoctorClinicInfo = class DoctorClinicInfo {
};
exports.DoctorClinicInfo = DoctorClinicInfo;
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], DoctorClinicInfo.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], DoctorClinicInfo.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], DoctorClinicInfo.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Date)
], DoctorClinicInfo.prototype, "birthday", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], DoctorClinicInfo.prototype, "nationality", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], DoctorClinicInfo.prototype, "phone", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], DoctorClinicInfo.prototype, "neigbhod", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], DoctorClinicInfo.prototype, "gender", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], DoctorClinicInfo.prototype, "city", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], DoctorClinicInfo.prototype, "municipality", void 0);
exports.DoctorClinicInfo = DoctorClinicInfo = __decorate([
    (0, graphql_1.ObjectType)()
], DoctorClinicInfo);
let MedicalReportResponse = class MedicalReportResponse {
};
exports.MedicalReportResponse = MedicalReportResponse;
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], MedicalReportResponse.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], MedicalReportResponse.prototype, "bloodPressure", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], MedicalReportResponse.prototype, "height", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], MedicalReportResponse.prototype, "weight", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], MedicalReportResponse.prototype, "pulse", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], MedicalReportResponse.prototype, "temperature", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], MedicalReportResponse.prototype, "otherPhysicalParams", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], MedicalReportResponse.prototype, "additionalObservation", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], MedicalReportResponse.prototype, "diagnosis", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], MedicalReportResponse.prototype, "treatmentPlan", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], MedicalReportResponse.prototype, "observations", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], MedicalReportResponse.prototype, "specialtyArea", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Boolean)
], MedicalReportResponse.prototype, "isUrgent", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], MedicalReportResponse.prototype, "symptomsDescription", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], MedicalReportResponse.prototype, "medicalEvaluation", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Date)
], MedicalReportResponse.prototype, "date", void 0);
__decorate([
    (0, graphql_1.Field)(() => [String]),
    __metadata("design:type", Array)
], MedicalReportResponse.prototype, "recommendations", void 0);
__decorate([
    (0, graphql_1.Field)(() => [String]),
    __metadata("design:type", Array)
], MedicalReportResponse.prototype, "orientations", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", DoctorClinicInfo)
], MedicalReportResponse.prototype, "institution", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", PacientInfo)
], MedicalReportResponse.prototype, "pacient", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", DoctorClinicInfo)
], MedicalReportResponse.prototype, "doctor", void 0);
exports.MedicalReportResponse = MedicalReportResponse = __decorate([
    (0, graphql_1.ObjectType)()
], MedicalReportResponse);
//# sourceMappingURL=medical-report-response.js.map