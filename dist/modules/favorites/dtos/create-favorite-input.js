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
exports.RemoveFavorite = exports.CreateFavoriteInput = exports.CreateFavorite = void 0;
const graphql_1 = require("@nestjs/graphql");
let CreateFavorite = class CreateFavorite {
};
exports.CreateFavorite = CreateFavorite;
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], CreateFavorite.prototype, "pacientId", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], CreateFavorite.prototype, "doctorId", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], CreateFavorite.prototype, "institutionId", void 0);
exports.CreateFavorite = CreateFavorite = __decorate([
    (0, graphql_1.InputType)()
], CreateFavorite);
let CreateFavoriteInput = class CreateFavoriteInput {
};
exports.CreateFavoriteInput = CreateFavoriteInput;
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], CreateFavoriteInput.prototype, "pacientId", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], CreateFavoriteInput.prototype, "doctorId", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], CreateFavoriteInput.prototype, "institutionId", void 0);
exports.CreateFavoriteInput = CreateFavoriteInput = __decorate([
    (0, graphql_1.InputType)()
], CreateFavoriteInput);
let RemoveFavorite = class RemoveFavorite {
};
exports.RemoveFavorite = RemoveFavorite;
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], RemoveFavorite.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], RemoveFavorite.prototype, "pacientId", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], RemoveFavorite.prototype, "doctorId", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], RemoveFavorite.prototype, "institutionId", void 0);
exports.RemoveFavorite = RemoveFavorite = __decorate([
    (0, graphql_1.InputType)()
], RemoveFavorite);
//# sourceMappingURL=create-favorite-input.js.map