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
exports.DoctorInstitutions = exports.Doctors = void 0;
const graphql_1 = require("@nestjs/graphql");
let Doctors = class Doctors {
};
exports.Doctors = Doctors;
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Doctors.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Doctors.prototype, "institutionId", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Boolean)
], Doctors.prototype, "isOnVacation", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Doctors.prototype, "userId", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Number)
], Doctors.prototype, "registrationNumber", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Doctors.prototype, "specialty", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Doctors.prototype, "bio", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Date)
], Doctors.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Date)
], Doctors.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Boolean)
], Doctors.prototype, "deletedAt", void 0);
exports.Doctors = Doctors = __decorate([
    (0, graphql_1.ObjectType)()
], Doctors);
let DoctorInstitutions = class DoctorInstitutions {
};
exports.DoctorInstitutions = DoctorInstitutions;
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], DoctorInstitutions.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], DoctorInstitutions.prototype, "doctorId", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], DoctorInstitutions.prototype, "institutionId", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Date)
], DoctorInstitutions.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Date)
], DoctorInstitutions.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Boolean)
], DoctorInstitutions.prototype, "deletedAt", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], DoctorInstitutions.prototype, "message", void 0);
exports.DoctorInstitutions = DoctorInstitutions = __decorate([
    (0, graphql_1.ObjectType)()
], DoctorInstitutions);
//# sourceMappingURL=doctor.entity.js.map