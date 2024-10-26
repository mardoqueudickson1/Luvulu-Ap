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
exports.ResponseDoctorType = exports.ResponseRating = void 0;
const graphql_1 = require("@nestjs/graphql");
const topRatedDoctors_1 = require("./topRatedDoctors");
let ResponseRating = class ResponseRating {
};
exports.ResponseRating = ResponseRating;
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], ResponseRating.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], ResponseRating.prototype, "userId", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], ResponseRating.prototype, "doctorId", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Number)
], ResponseRating.prototype, "rate", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], ResponseRating.prototype, "comment", void 0);
__decorate([
    (0, graphql_1.Field)(() => topRatedDoctors_1.UserInfo),
    __metadata("design:type", topRatedDoctors_1.UserInfo)
], ResponseRating.prototype, "user", void 0);
exports.ResponseRating = ResponseRating = __decorate([
    (0, graphql_1.ObjectType)()
], ResponseRating);
let ResponseDoctorType = class ResponseDoctorType {
};
exports.ResponseDoctorType = ResponseDoctorType;
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], ResponseDoctorType.prototype, "userId", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], ResponseDoctorType.prototype, "doctorId", void 0);
exports.ResponseDoctorType = ResponseDoctorType = __decorate([
    (0, graphql_1.InputType)()
], ResponseDoctorType);
//# sourceMappingURL=reponseRating.js.map