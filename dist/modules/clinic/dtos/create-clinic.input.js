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
exports.CreateClinicPartial = exports.CreateClinicInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const client_1 = require("@prisma/client");
const class_validator_1 = require("class-validator");
let CreateClinicInput = class CreateClinicInput {
};
exports.CreateClinicInput = CreateClinicInput;
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], CreateClinicInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateClinicInput.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateClinicInput.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    (0, graphql_1.HideField)(),
    (0, graphql_1.HideField)(),
    __metadata("design:type", Date)
], CreateClinicInput.prototype, "birthday", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, graphql_1.HideField)(),
    __metadata("design:type", String)
], CreateClinicInput.prototype, "nationality", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], CreateClinicInput.prototype, "Role", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateClinicInput.prototype, "phone", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    (0, graphql_1.HideField)(),
    __metadata("design:type", String)
], CreateClinicInput.prototype, "FatherName", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, graphql_1.Field)({ nullable: true }),
    (0, graphql_1.HideField)(),
    __metadata("design:type", String)
], CreateClinicInput.prototype, "MotherName", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    (0, class_validator_1.IsOptional)(),
    (0, graphql_1.HideField)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateClinicInput.prototype, "BI", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateClinicInput.prototype, "neigbhod", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    (0, graphql_1.HideField)(),
    __metadata("design:type", String)
], CreateClinicInput.prototype, "gender", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], CreateClinicInput.prototype, "avatar", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateClinicInput.prototype, "city", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], CreateClinicInput.prototype, "type", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], CreateClinicInput.prototype, "nif", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateClinicInput.prototype, "municipality", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateClinicInput.prototype, "addressComplement", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Number)
], CreateClinicInput.prototype, "clinicLatitude", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Number)
], CreateClinicInput.prototype, "cliniclongitude", void 0);
exports.CreateClinicInput = CreateClinicInput = __decorate([
    (0, graphql_1.InputType)()
], CreateClinicInput);
let CreateClinicPartial = class CreateClinicPartial {
};
exports.CreateClinicPartial = CreateClinicPartial;
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], CreateClinicPartial.prototype, "userId", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], CreateClinicPartial.prototype, "clinicLatitude", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], CreateClinicPartial.prototype, "cliniclongitude", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], CreateClinicPartial.prototype, "type", void 0);
exports.CreateClinicPartial = CreateClinicPartial = __decorate([
    (0, graphql_1.InputType)()
], CreateClinicPartial);
//# sourceMappingURL=create-clinic.input.js.map