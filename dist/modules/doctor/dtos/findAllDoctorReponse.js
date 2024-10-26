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
exports.FindAllDoctorResponse = void 0;
const graphql_1 = require("@nestjs/graphql");
const class_validator_1 = require("class-validator");
let FindAllDoctorResponse = class FindAllDoctorResponse {
};
exports.FindAllDoctorResponse = FindAllDoctorResponse;
__decorate([
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], FindAllDoctorResponse.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], FindAllDoctorResponse.prototype, "patient_number", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], FindAllDoctorResponse.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], FindAllDoctorResponse.prototype, "phone", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], FindAllDoctorResponse.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], FindAllDoctorResponse.prototype, "gender", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date),
    __metadata("design:type", Date)
], FindAllDoctorResponse.prototype, "birthday", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], FindAllDoctorResponse.prototype, "nationality", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], FindAllDoctorResponse.prototype, "avatar", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], FindAllDoctorResponse.prototype, "city", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], FindAllDoctorResponse.prototype, "municipality", void 0);
exports.FindAllDoctorResponse = FindAllDoctorResponse = __decorate([
    (0, graphql_1.ObjectType)()
], FindAllDoctorResponse);
//# sourceMappingURL=findAllDoctorReponse.js.map