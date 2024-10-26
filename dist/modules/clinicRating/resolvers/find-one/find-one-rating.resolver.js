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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindOneClinicRatingResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const ClinicRating_entity_1 = require("../../entities/ClinicRating.entity");
const find_onde_rating_service_1 = require("../../usecases/find-one/find-onde-rating.service");
let FindOneClinicRatingResolver = class FindOneClinicRatingResolver {
    constructor(repo) {
        this.repo = repo;
    }
    async findOneClinicRating(id) {
        return await this.repo.findOne(id);
    }
};
exports.FindOneClinicRatingResolver = FindOneClinicRatingResolver;
__decorate([
    (0, graphql_1.Query)(() => ClinicRating_entity_1.ClinicRatings),
    __param(0, (0, graphql_1.Args)('id', { type: () => String })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], FindOneClinicRatingResolver.prototype, "findOneClinicRating", null);
exports.FindOneClinicRatingResolver = FindOneClinicRatingResolver = __decorate([
    (0, graphql_1.Resolver)(),
    __metadata("design:paramtypes", [find_onde_rating_service_1.FindOneClinicRatingService])
], FindOneClinicRatingResolver);
//# sourceMappingURL=find-one-rating.resolver.js.map