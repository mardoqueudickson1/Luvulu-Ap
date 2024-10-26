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
exports.GetMedicalHsitoryByPatientIdOutput = exports.DoctorsResponse = void 0;
const graphql_1 = require("@nestjs/graphql");
const appointments_entity_1 = require("../../appointments/entities/appointments.entity");
let DoctorsResponse = class DoctorsResponse {
};
exports.DoctorsResponse = DoctorsResponse;
__decorate([
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], DoctorsResponse.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], DoctorsResponse.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], DoctorsResponse.prototype, "phone", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], DoctorsResponse.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], DoctorsResponse.prototype, "gender", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date),
    __metadata("design:type", Date)
], DoctorsResponse.prototype, "birthday", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], DoctorsResponse.prototype, "nationality", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], DoctorsResponse.prototype, "avatar", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], DoctorsResponse.prototype, "city", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], DoctorsResponse.prototype, "municipality", void 0);
exports.DoctorsResponse = DoctorsResponse = __decorate([
    (0, graphql_1.ObjectType)()
], DoctorsResponse);
let GetMedicalHsitoryByPatientIdOutput = class GetMedicalHsitoryByPatientIdOutput {
};
exports.GetMedicalHsitoryByPatientIdOutput = GetMedicalHsitoryByPatientIdOutput;
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], GetMedicalHsitoryByPatientIdOutput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], GetMedicalHsitoryByPatientIdOutput.prototype, "appointmentId", void 0);
__decorate([
    (0, graphql_1.Field)(() => appointments_entity_1.Appointments),
    __metadata("design:type", appointments_entity_1.Appointments)
], GetMedicalHsitoryByPatientIdOutput.prototype, "appointment", void 0);
__decorate([
    (0, graphql_1.Field)(() => DoctorsResponse),
    __metadata("design:type", DoctorsResponse)
], GetMedicalHsitoryByPatientIdOutput.prototype, "doctor", void 0);
exports.GetMedicalHsitoryByPatientIdOutput = GetMedicalHsitoryByPatientIdOutput = __decorate([
    (0, graphql_1.ObjectType)()
], GetMedicalHsitoryByPatientIdOutput);
//# sourceMappingURL=get-medical-history-byPatientId-output.js.map