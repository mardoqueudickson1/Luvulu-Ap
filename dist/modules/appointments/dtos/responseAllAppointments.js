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
exports.ResponseAllAppointPatient = exports.InstitutionsReponse = exports.DoctorsReponses = exports.UsersResponse = void 0;
const graphql_1 = require("@nestjs/graphql");
const client_1 = require("@prisma/client");
let UsersResponse = class UsersResponse {
};
exports.UsersResponse = UsersResponse;
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], UsersResponse.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], UsersResponse.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], UsersResponse.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], UsersResponse.prototype, "neigbhod", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], UsersResponse.prototype, "city", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], UsersResponse.prototype, "municipality", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], UsersResponse.prototype, "addressComplement", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], UsersResponse.prototype, "phone", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", Date)
], UsersResponse.prototype, "birthday", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], UsersResponse.prototype, "avatar", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], UsersResponse.prototype, "gender", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], UsersResponse.prototype, "FatherName", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], UsersResponse.prototype, "MotherName", void 0);
exports.UsersResponse = UsersResponse = __decorate([
    (0, graphql_1.ObjectType)()
], UsersResponse);
let DoctorsReponses = class DoctorsReponses {
};
exports.DoctorsReponses = DoctorsReponses;
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], DoctorsReponses.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Boolean)
], DoctorsReponses.prototype, "isOnVacation", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], DoctorsReponses.prototype, "doctorToken", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], DoctorsReponses.prototype, "specialty", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], DoctorsReponses.prototype, "bio", void 0);
__decorate([
    (0, graphql_1.Field)(() => UsersResponse),
    __metadata("design:type", UsersResponse)
], DoctorsReponses.prototype, "user", void 0);
exports.DoctorsReponses = DoctorsReponses = __decorate([
    (0, graphql_1.ObjectType)()
], DoctorsReponses);
let InstitutionsReponse = class InstitutionsReponse {
};
exports.InstitutionsReponse = InstitutionsReponse;
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], InstitutionsReponse.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Date)
], InstitutionsReponse.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Date)
], InstitutionsReponse.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", UsersResponse)
], InstitutionsReponse.prototype, "user", void 0);
exports.InstitutionsReponse = InstitutionsReponse = __decorate([
    (0, graphql_1.ObjectType)()
], InstitutionsReponse);
let ResponseAllAppointPatient = class ResponseAllAppointPatient {
};
exports.ResponseAllAppointPatient = ResponseAllAppointPatient;
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], ResponseAllAppointPatient.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", UsersResponse)
], ResponseAllAppointPatient.prototype, "pacient", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], ResponseAllAppointPatient.prototype, "consultationType", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], ResponseAllAppointPatient.prototype, "doctorId", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], ResponseAllAppointPatient.prototype, "institutionId", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], ResponseAllAppointPatient.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Boolean)
], ResponseAllAppointPatient.prototype, "isUrgent", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Boolean)
], ResponseAllAppointPatient.prototype, "isReported", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Boolean)
], ResponseAllAppointPatient.prototype, "isRated", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Date)
], ResponseAllAppointPatient.prototype, "date", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], ResponseAllAppointPatient.prototype, "patientId", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", DoctorsReponses)
], ResponseAllAppointPatient.prototype, "doctor", void 0);
__decorate([
    (0, graphql_1.Field)(() => InstitutionsReponse),
    __metadata("design:type", InstitutionsReponse)
], ResponseAllAppointPatient.prototype, "institution", void 0);
__decorate([
    (0, graphql_1.Field)(() => [String]),
    __metadata("design:type", Array)
], ResponseAllAppointPatient.prototype, "medicalReportId", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], ResponseAllAppointPatient.prototype, "status", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], ResponseAllAppointPatient.prototype, "symptomDescription", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Date)
], ResponseAllAppointPatient.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Date)
], ResponseAllAppointPatient.prototype, "updatedAt", void 0);
exports.ResponseAllAppointPatient = ResponseAllAppointPatient = __decorate([
    (0, graphql_1.ObjectType)()
], ResponseAllAppointPatient);
//# sourceMappingURL=responseAllAppointments.js.map