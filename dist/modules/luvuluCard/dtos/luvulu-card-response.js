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
exports.LuvuluCardResponse = exports.CreateLuvuluCardResponse = exports.UserCardInfo = void 0;
const graphql_1 = require("@nestjs/graphql");
const client_1 = require("@prisma/client");
let UserCardInfo = class UserCardInfo {
};
exports.UserCardInfo = UserCardInfo;
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], UserCardInfo.prototype, "name", void 0);
exports.UserCardInfo = UserCardInfo = __decorate([
    (0, graphql_1.InputType)()
], UserCardInfo);
let CreateLuvuluCardResponse = class CreateLuvuluCardResponse {
};
exports.CreateLuvuluCardResponse = CreateLuvuluCardResponse;
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], CreateLuvuluCardResponse.prototype, "patient", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], CreateLuvuluCardResponse.prototype, "qrCode", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], CreateLuvuluCardResponse.prototype, "cardNumber", void 0);
exports.CreateLuvuluCardResponse = CreateLuvuluCardResponse = __decorate([
    (0, graphql_1.ObjectType)()
], CreateLuvuluCardResponse);
let LuvuluCardResponse = class LuvuluCardResponse {
};
exports.LuvuluCardResponse = LuvuluCardResponse;
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], LuvuluCardResponse.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], LuvuluCardResponse.prototype, "pacientId", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], LuvuluCardResponse.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], LuvuluCardResponse.prototype, "token", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], LuvuluCardResponse.prototype, "qrCode", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], LuvuluCardResponse.prototype, "cardNumber", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], LuvuluCardResponse.prototype, "status", void 0);
exports.LuvuluCardResponse = LuvuluCardResponse = __decorate([
    (0, graphql_1.ObjectType)()
], LuvuluCardResponse);
//# sourceMappingURL=luvulu-card-response.js.map