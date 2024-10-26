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
exports.MedicalReports = void 0;
const graphql_1 = require("@nestjs/graphql");
let MedicalReports = class MedicalReports {
};
exports.MedicalReports = MedicalReports;
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], MedicalReports.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], MedicalReports.prototype, "institutionId", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], MedicalReports.prototype, "doctorId", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], MedicalReports.prototype, "patientId", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], MedicalReports.prototype, "AppointmentId", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], MedicalReports.prototype, "additionalObservation", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], MedicalReports.prototype, "medicalEvaluation", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Date)
], MedicalReports.prototype, "date", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], MedicalReports.prototype, "bloodPressure", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], MedicalReports.prototype, "height", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], MedicalReports.prototype, "weight", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], MedicalReports.prototype, "pulse", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], MedicalReports.prototype, "temperature", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], MedicalReports.prototype, "otherPhysicalParams", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], MedicalReports.prototype, "diagnosis", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], MedicalReports.prototype, "treatmentPlan", void 0);
__decorate([
    (0, graphql_1.Field)(() => [String]),
    __metadata("design:type", Array)
], MedicalReports.prototype, "recommendations", void 0);
__decorate([
    (0, graphql_1.Field)(() => [String]),
    __metadata("design:type", Array)
], MedicalReports.prototype, "orientations", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], MedicalReports.prototype, "observations", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], MedicalReports.prototype, "symptomsDescription", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Date)
], MedicalReports.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Date)
], MedicalReports.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Boolean)
], MedicalReports.prototype, "deletedAt", void 0);
exports.MedicalReports = MedicalReports = __decorate([
    (0, graphql_1.ObjectType)()
], MedicalReports);
//# sourceMappingURL=medical-report.entity.js.map