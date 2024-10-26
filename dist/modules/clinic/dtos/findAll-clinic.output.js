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
exports.NearByclinicResponse = exports.ClinicResponse = exports.ClinicOutput = void 0;
const graphql_1 = require("@nestjs/graphql");
const reponseClinicRating_1 = require("../../clinicRating/dtos/reponseClinicRating");
let UserClinic = class UserClinic {
};
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], UserClinic.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], UserClinic.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], UserClinic.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], UserClinic.prototype, "nationality", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], UserClinic.prototype, "Role", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], UserClinic.prototype, "phone", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], UserClinic.prototype, "neigbhod", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], UserClinic.prototype, "city", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], UserClinic.prototype, "nif", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], UserClinic.prototype, "municipality", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], UserClinic.prototype, "addressComplement", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], UserClinic.prototype, "avatar", void 0);
UserClinic = __decorate([
    (0, graphql_1.ObjectType)()
], UserClinic);
let ClinicOutput = class ClinicOutput {
};
exports.ClinicOutput = ClinicOutput;
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", UserClinic)
], ClinicOutput.prototype, "user", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], ClinicOutput.prototype, "clinicLatitude", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], ClinicOutput.prototype, "cliniclongitude", void 0);
exports.ClinicOutput = ClinicOutput = __decorate([
    (0, graphql_1.ObjectType)()
], ClinicOutput);
let ClinicResponse = class ClinicResponse {
};
exports.ClinicResponse = ClinicResponse;
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], ClinicResponse.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", UserClinic)
], ClinicResponse.prototype, "user", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], ClinicResponse.prototype, "clinicLatitude", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], ClinicResponse.prototype, "cliniclongitude", void 0);
exports.ClinicResponse = ClinicResponse = __decorate([
    (0, graphql_1.ObjectType)()
], ClinicResponse);
let NearByclinicResponse = class NearByclinicResponse {
};
exports.NearByclinicResponse = NearByclinicResponse;
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", UserClinic)
], NearByclinicResponse.prototype, "user", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", Number)
], NearByclinicResponse.prototype, "distance", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], NearByclinicResponse.prototype, "time", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], NearByclinicResponse.prototype, "distanceInKm", void 0);
__decorate([
    (0, graphql_1.Field)(() => [reponseClinicRating_1.ResponseClinicRating], { nullable: true }),
    __metadata("design:type", Array)
], NearByclinicResponse.prototype, "rating", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", Object)
], NearByclinicResponse.prototype, "averageRating", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", Object)
], NearByclinicResponse.prototype, "totalRating", void 0);
__decorate([
    (0, graphql_1.Field)(() => [reponseClinicRating_1.ServiceClinic], { nullable: true }),
    __metadata("design:type", Array)
], NearByclinicResponse.prototype, "services", void 0);
__decorate([
    (0, graphql_1.Field)(() => [reponseClinicRating_1.ResponseClinicRating], { nullable: true }),
    __metadata("design:type", Array)
], NearByclinicResponse.prototype, "clinicRating", void 0);
exports.NearByclinicResponse = NearByclinicResponse = __decorate([
    (0, graphql_1.ObjectType)()
], NearByclinicResponse);
//# sourceMappingURL=findAll-clinic.output.js.map