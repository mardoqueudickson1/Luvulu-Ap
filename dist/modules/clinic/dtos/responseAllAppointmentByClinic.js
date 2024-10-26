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
exports.ResponseAllAppointClinic = exports.DoctorsClinicResponse = exports.ConsultationTypeResponseClinic = exports.PatientReponsesClinic = exports.UserClinicResponse = void 0;
const graphql_1 = require("@nestjs/graphql");
const client_1 = require("@prisma/client");
let UserClinicResponse = class UserClinicResponse {
};
exports.UserClinicResponse = UserClinicResponse;
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], UserClinicResponse.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], UserClinicResponse.prototype, "name", void 0);
exports.UserClinicResponse = UserClinicResponse = __decorate([
    (0, graphql_1.ObjectType)()
], UserClinicResponse);
let PatientReponsesClinic = class PatientReponsesClinic {
};
exports.PatientReponsesClinic = PatientReponsesClinic;
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], PatientReponsesClinic.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Number)
], PatientReponsesClinic.prototype, "number", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Date)
], PatientReponsesClinic.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Date)
], PatientReponsesClinic.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserClinicResponse),
    __metadata("design:type", UserClinicResponse)
], PatientReponsesClinic.prototype, "user", void 0);
exports.PatientReponsesClinic = PatientReponsesClinic = __decorate([
    (0, graphql_1.ObjectType)()
], PatientReponsesClinic);
let ConsultationTypeResponseClinic = class ConsultationTypeResponseClinic {
};
exports.ConsultationTypeResponseClinic = ConsultationTypeResponseClinic;
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], ConsultationTypeResponseClinic.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], ConsultationTypeResponseClinic.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Date)
], ConsultationTypeResponseClinic.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Date)
], ConsultationTypeResponseClinic.prototype, "updatedAt", void 0);
exports.ConsultationTypeResponseClinic = ConsultationTypeResponseClinic = __decorate([
    (0, graphql_1.ObjectType)()
], ConsultationTypeResponseClinic);
let DoctorsClinicResponse = class DoctorsClinicResponse {
};
exports.DoctorsClinicResponse = DoctorsClinicResponse;
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], DoctorsClinicResponse.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Boolean)
], DoctorsClinicResponse.prototype, "isOnVacation", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], DoctorsClinicResponse.prototype, "specialty", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], DoctorsClinicResponse.prototype, "bio", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Date)
], DoctorsClinicResponse.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Date)
], DoctorsClinicResponse.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Boolean)
], DoctorsClinicResponse.prototype, "deletedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserClinicResponse),
    __metadata("design:type", UserClinicResponse)
], DoctorsClinicResponse.prototype, "user", void 0);
exports.DoctorsClinicResponse = DoctorsClinicResponse = __decorate([
    (0, graphql_1.ObjectType)()
], DoctorsClinicResponse);
let ResponseAllAppointClinic = class ResponseAllAppointClinic {
};
exports.ResponseAllAppointClinic = ResponseAllAppointClinic;
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], ResponseAllAppointClinic.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Boolean)
], ResponseAllAppointClinic.prototype, "isUrgent", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Date)
], ResponseAllAppointClinic.prototype, "date", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", DoctorsClinicResponse)
], ResponseAllAppointClinic.prototype, "doctor", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", PatientReponsesClinic)
], ResponseAllAppointClinic.prototype, "patient", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", ConsultationTypeResponseClinic)
], ResponseAllAppointClinic.prototype, "consultationType", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], ResponseAllAppointClinic.prototype, "status", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], ResponseAllAppointClinic.prototype, "symptomDescription", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Date)
], ResponseAllAppointClinic.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Date)
], ResponseAllAppointClinic.prototype, "updatedAt", void 0);
exports.ResponseAllAppointClinic = ResponseAllAppointClinic = __decorate([
    (0, graphql_1.ObjectType)()
], ResponseAllAppointClinic);
//# sourceMappingURL=responseAllAppointmentByClinic.js.map