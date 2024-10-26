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
exports.ResponseCount = exports.ResponseSearchDoctors = exports.ResponseAllDoctor = exports.InstitutionIResponse = exports.InstitutionInformation = exports.UserInformation = void 0;
const graphql_1 = require("@nestjs/graphql");
const client_1 = require("@prisma/client");
const reponseRating_1 = require("../../doctorRating/dtos/reponseRating");
let UserInformation = class UserInformation {
};
exports.UserInformation = UserInformation;
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], UserInformation.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], UserInformation.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], UserInformation.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Date)
], UserInformation.prototype, "birthday", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], UserInformation.prototype, "nationality", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], UserInformation.prototype, "phone", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], UserInformation.prototype, "FatherName", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], UserInformation.prototype, "Role", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], UserInformation.prototype, "MotherName", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], UserInformation.prototype, "neigbhod", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], UserInformation.prototype, "gender", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], UserInformation.prototype, "avatar", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], UserInformation.prototype, "city", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], UserInformation.prototype, "nif", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], UserInformation.prototype, "municipality", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], UserInformation.prototype, "addressComplement", void 0);
exports.UserInformation = UserInformation = __decorate([
    (0, graphql_1.ObjectType)()
], UserInformation);
let InstitutionInformation = class InstitutionInformation {
};
exports.InstitutionInformation = InstitutionInformation;
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], InstitutionInformation.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], InstitutionInformation.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], InstitutionInformation.prototype, "city", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], InstitutionInformation.prototype, "municipality", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], InstitutionInformation.prototype, "neigbhod", void 0);
__decorate([
    (0, graphql_1.Field)(() => [String]),
    __metadata("design:type", Array)
], InstitutionInformation.prototype, "service", void 0);
exports.InstitutionInformation = InstitutionInformation = __decorate([
    (0, graphql_1.ObjectType)()
], InstitutionInformation);
let InstitutionIResponse = class InstitutionIResponse {
};
exports.InstitutionIResponse = InstitutionIResponse;
__decorate([
    (0, graphql_1.Field)(() => [InstitutionInformation]),
    __metadata("design:type", Array)
], InstitutionIResponse.prototype, "institutions", void 0);
exports.InstitutionIResponse = InstitutionIResponse = __decorate([
    (0, graphql_1.ObjectType)()
], InstitutionIResponse);
let ResponseAllDoctor = class ResponseAllDoctor {
};
exports.ResponseAllDoctor = ResponseAllDoctor;
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], ResponseAllDoctor.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], ResponseAllDoctor.prototype, "specialty", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], ResponseAllDoctor.prototype, "bio", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Number)
], ResponseAllDoctor.prototype, "registrationNumber", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserInformation),
    __metadata("design:type", UserInformation)
], ResponseAllDoctor.prototype, "user", void 0);
__decorate([
    (0, graphql_1.Field)(() => [InstitutionInformation]),
    __metadata("design:type", Array)
], ResponseAllDoctor.prototype, "institutions", void 0);
exports.ResponseAllDoctor = ResponseAllDoctor = __decorate([
    (0, graphql_1.ObjectType)()
], ResponseAllDoctor);
let ResponseSearchDoctors = class ResponseSearchDoctors {
};
exports.ResponseSearchDoctors = ResponseSearchDoctors;
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], ResponseSearchDoctors.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => [reponseRating_1.ResponseRating]),
    __metadata("design:type", Array)
], ResponseSearchDoctors.prototype, "rating", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserInformation),
    __metadata("design:type", UserInformation)
], ResponseSearchDoctors.prototype, "user", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", Number)
], ResponseSearchDoctors.prototype, "count", void 0);
exports.ResponseSearchDoctors = ResponseSearchDoctors = __decorate([
    (0, graphql_1.ObjectType)()
], ResponseSearchDoctors);
let ResponseCount = class ResponseCount {
};
exports.ResponseCount = ResponseCount;
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", Number)
], ResponseCount.prototype, "count", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", Number)
], ResponseCount.prototype, "doctors", void 0);
exports.ResponseCount = ResponseCount = __decorate([
    (0, graphql_1.ObjectType)()
], ResponseCount);
//# sourceMappingURL=response-all-doctor.js.map