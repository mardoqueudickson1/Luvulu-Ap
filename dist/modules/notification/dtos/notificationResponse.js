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
exports.NotificationResponse = exports.userInstitutionNotifications = exports.userDoctorNotifications = exports.userPatientNotifications = exports.userNotifications = void 0;
const graphql_1 = require("@nestjs/graphql");
const user_1 = require("../../user/entities/user");
let userNotifications = class userNotifications {
};
exports.userNotifications = userNotifications;
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], userNotifications.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], userNotifications.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], userNotifications.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], userNotifications.prototype, "nationality", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], userNotifications.prototype, "nif", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], userNotifications.prototype, "FatherName", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], userNotifications.prototype, "MotherName", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], userNotifications.prototype, "avatar", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], userNotifications.prototype, "municipality", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], userNotifications.prototype, "city", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], userNotifications.prototype, "neigbhod", void 0);
exports.userNotifications = userNotifications = __decorate([
    (0, graphql_1.ObjectType)()
], userNotifications);
let userPatientNotifications = class userPatientNotifications {
};
exports.userPatientNotifications = userPatientNotifications;
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", Number)
], userPatientNotifications.prototype, "number", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", user_1.Users)
], userPatientNotifications.prototype, "patient", void 0);
exports.userPatientNotifications = userPatientNotifications = __decorate([
    (0, graphql_1.ObjectType)()
], userPatientNotifications);
let userDoctorNotifications = class userDoctorNotifications {
};
exports.userDoctorNotifications = userDoctorNotifications;
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Boolean)
], userDoctorNotifications.prototype, "isOnVacation", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Number)
], userDoctorNotifications.prototype, "registrationNumber", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], userDoctorNotifications.prototype, "specialty", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], userDoctorNotifications.prototype, "bio", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", user_1.Users)
], userDoctorNotifications.prototype, "doctors", void 0);
exports.userDoctorNotifications = userDoctorNotifications = __decorate([
    (0, graphql_1.ObjectType)()
], userDoctorNotifications);
let userInstitutionNotifications = class userInstitutionNotifications {
};
exports.userInstitutionNotifications = userInstitutionNotifications;
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", user_1.Users)
], userInstitutionNotifications.prototype, "institutions", void 0);
exports.userInstitutionNotifications = userInstitutionNotifications = __decorate([
    (0, graphql_1.ObjectType)()
], userInstitutionNotifications);
let NotificationResponse = class NotificationResponse {
};
exports.NotificationResponse = NotificationResponse;
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], NotificationResponse.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], NotificationResponse.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], NotificationResponse.prototype, "avatar", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], NotificationResponse.prototype, "content", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Boolean)
], NotificationResponse.prototype, "read", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], NotificationResponse.prototype, "doctor_id", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], NotificationResponse.prototype, "patient_id", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], NotificationResponse.prototype, "institution_id", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], NotificationResponse.prototype, "appointmentId", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], NotificationResponse.prototype, "type", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], NotificationResponse.prototype, "luvuliCardId", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Date)
], NotificationResponse.prototype, "createdAt", void 0);
exports.NotificationResponse = NotificationResponse = __decorate([
    (0, graphql_1.ObjectType)()
], NotificationResponse);
//# sourceMappingURL=notificationResponse.js.map