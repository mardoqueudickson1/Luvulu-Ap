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
exports.LuvuluCard = void 0;
const graphql_1 = require("@nestjs/graphql");
const client_1 = require("@prisma/client");
let LuvuluCard = class LuvuluCard {
};
exports.LuvuluCard = LuvuluCard;
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], LuvuluCard.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], LuvuluCard.prototype, "patientId", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], LuvuluCard.prototype, "clinicId", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], LuvuluCard.prototype, "qrCode", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], LuvuluCard.prototype, "cardNumber", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], LuvuluCard.prototype, "status", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", Date)
], LuvuluCard.prototype, "issuedOn", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Date)
], LuvuluCard.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Date)
], LuvuluCard.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Boolean)
], LuvuluCard.prototype, "deletedAt", void 0);
exports.LuvuluCard = LuvuluCard = __decorate([
    (0, graphql_1.ObjectType)()
], LuvuluCard);
//# sourceMappingURL=luvulu-card.entity.js.map