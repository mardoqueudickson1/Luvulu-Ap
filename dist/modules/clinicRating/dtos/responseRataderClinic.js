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
exports.ResponseRatedDoctor = void 0;
const graphql_1 = require("@nestjs/graphql");
const reponseClinicRating_1 = require("./reponseClinicRating");
const topRatedClinic_1 = require("./topRatedClinic");
let ResponseRatedDoctor = class ResponseRatedDoctor {
};
exports.ResponseRatedDoctor = ResponseRatedDoctor;
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], ResponseRatedDoctor.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], ResponseRatedDoctor.prototype, "specialty", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], ResponseRatedDoctor.prototype, "institutionId", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], ResponseRatedDoctor.prototype, "bio", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Number)
], ResponseRatedDoctor.prototype, "registrationNumber", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", topRatedClinic_1.InstitutionTypes)
], ResponseRatedDoctor.prototype, "institutions", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", topRatedClinic_1.UserInfos)
], ResponseRatedDoctor.prototype, "user", void 0);
__decorate([
    (0, graphql_1.Field)(() => [reponseClinicRating_1.ResponseClinicRating]),
    __metadata("design:type", Array)
], ResponseRatedDoctor.prototype, "rating", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Number)
], ResponseRatedDoctor.prototype, "totalRating", void 0);
exports.ResponseRatedDoctor = ResponseRatedDoctor = __decorate([
    (0, graphql_1.ObjectType)()
], ResponseRatedDoctor);
//# sourceMappingURL=responseRataderClinic.js.map