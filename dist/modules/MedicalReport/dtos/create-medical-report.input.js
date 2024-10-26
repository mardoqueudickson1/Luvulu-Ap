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
exports.CreateMedicalReport = exports.CreateMedicalReportInput = void 0;
const graphql_1 = require("@nestjs/graphql");
let CreateMedicalReportInput = class CreateMedicalReportInput {
};
exports.CreateMedicalReportInput = CreateMedicalReportInput;
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], CreateMedicalReportInput.prototype, "institutionId", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], CreateMedicalReportInput.prototype, "doctorId", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], CreateMedicalReportInput.prototype, "patientId", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], CreateMedicalReportInput.prototype, "AppointmentId", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], CreateMedicalReportInput.prototype, "bloodPressure", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], CreateMedicalReportInput.prototype, "height", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], CreateMedicalReportInput.prototype, "weight", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], CreateMedicalReportInput.prototype, "pulse", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], CreateMedicalReportInput.prototype, "temperature", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], CreateMedicalReportInput.prototype, "otherPhysicalParams", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], CreateMedicalReportInput.prototype, "additionalObservation", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], CreateMedicalReportInput.prototype, "diagnosis", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], CreateMedicalReportInput.prototype, "treatmentPlan", void 0);
__decorate([
    (0, graphql_1.Field)(() => [String]),
    __metadata("design:type", Array)
], CreateMedicalReportInput.prototype, "recommendations", void 0);
__decorate([
    (0, graphql_1.Field)(() => [String]),
    __metadata("design:type", Array)
], CreateMedicalReportInput.prototype, "orientations", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], CreateMedicalReportInput.prototype, "observations", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], CreateMedicalReportInput.prototype, "symptomsDescription", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], CreateMedicalReportInput.prototype, "medicalEvaluation", void 0);
exports.CreateMedicalReportInput = CreateMedicalReportInput = __decorate([
    (0, graphql_1.InputType)()
], CreateMedicalReportInput);
let CreateMedicalReport = class CreateMedicalReport {
};
exports.CreateMedicalReport = CreateMedicalReport;
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], CreateMedicalReport.prototype, "institutionId", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], CreateMedicalReport.prototype, "doctorId", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], CreateMedicalReport.prototype, "patientId", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], CreateMedicalReport.prototype, "AppointmentId", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], CreateMedicalReport.prototype, "bloodPressure", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], CreateMedicalReport.prototype, "height", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], CreateMedicalReport.prototype, "weight", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], CreateMedicalReport.prototype, "pulse", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], CreateMedicalReport.prototype, "temperature", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], CreateMedicalReport.prototype, "otherPhysicalParams", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], CreateMedicalReport.prototype, "diagnosis", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], CreateMedicalReport.prototype, "treatmentPlan", void 0);
__decorate([
    (0, graphql_1.Field)(() => [String]),
    __metadata("design:type", Array)
], CreateMedicalReport.prototype, "recommendations", void 0);
__decorate([
    (0, graphql_1.Field)(() => [String]),
    __metadata("design:type", Array)
], CreateMedicalReport.prototype, "orientations", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], CreateMedicalReport.prototype, "observations", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], CreateMedicalReport.prototype, "symptomsDescription", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], CreateMedicalReport.prototype, "medicalEvaluation", void 0);
exports.CreateMedicalReport = CreateMedicalReport = __decorate([
    (0, graphql_1.InputType)()
], CreateMedicalReport);
//# sourceMappingURL=create-medical-report.input.js.map