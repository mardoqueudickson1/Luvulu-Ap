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
exports.UserProfileResponse = void 0;
const graphql_1 = require("@nestjs/graphql");
const client_1 = require("@prisma/client");
let UserProfileResponse = class UserProfileResponse {
};
exports.UserProfileResponse = UserProfileResponse;
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], UserProfileResponse.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], UserProfileResponse.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], UserProfileResponse.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, graphql_1.HideField)(),
    __metadata("design:type", String)
], UserProfileResponse.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", Date)
], UserProfileResponse.prototype, "birthday", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], UserProfileResponse.prototype, "nationality", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], UserProfileResponse.prototype, "Role", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], UserProfileResponse.prototype, "phone", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], UserProfileResponse.prototype, "FatherName", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], UserProfileResponse.prototype, "MotherName", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], UserProfileResponse.prototype, "neigbhod", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], UserProfileResponse.prototype, "gender", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], UserProfileResponse.prototype, "city", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], UserProfileResponse.prototype, "nif", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], UserProfileResponse.prototype, "municipality", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], UserProfileResponse.prototype, "avatar", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], UserProfileResponse.prototype, "addressComplement", void 0);
exports.UserProfileResponse = UserProfileResponse = __decorate([
    (0, graphql_1.ObjectType)()
], UserProfileResponse);
//# sourceMappingURL=profile-user-response.js.map