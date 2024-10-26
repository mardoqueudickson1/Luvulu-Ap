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
exports.UserResponse = void 0;
const graphql_1 = require("@nestjs/graphql");
let UserResponse = class UserResponse {
};
exports.UserResponse = UserResponse;
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], UserResponse.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], UserResponse.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], UserResponse.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Date)
], UserResponse.prototype, "birthday", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], UserResponse.prototype, "nationality", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], UserResponse.prototype, "phone", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], UserResponse.prototype, "BI", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], UserResponse.prototype, "FatherName", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], UserResponse.prototype, "MotherName", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], UserResponse.prototype, "neigbhod", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], UserResponse.prototype, "gender", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], UserResponse.prototype, "city", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], UserResponse.prototype, "nif", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], UserResponse.prototype, "municipality", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], UserResponse.prototype, "addressComplement", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Number)
], UserResponse.prototype, "paciente_number", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], UserResponse.prototype, "pacienteId", void 0);
exports.UserResponse = UserResponse = __decorate([
    (0, graphql_1.ObjectType)()
], UserResponse);
//# sourceMappingURL=userResponse.js.map