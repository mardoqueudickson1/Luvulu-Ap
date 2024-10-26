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
exports.UpdateClinicRatingResolver = void 0;
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const jwt_auth_guard_1 = require("../../../auth/guards/jwt-auth.guard");
const ClinicRating_entity_1 = require("../../entities/ClinicRating.entity");
const update_rating_service_1 = require("../../usecases/update/update-rating.service");
const update_ClinicRating_1 = require("../../dtos/update-ClinicRating");
let UpdateClinicRatingResolver = class UpdateClinicRatingResolver {
    constructor(repo) {
        this.repo = repo;
    }
    async UpdateClinicRating(data) {
        return await this.repo.update(data.id, data);
    }
};
exports.UpdateClinicRatingResolver = UpdateClinicRatingResolver;
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.GqlAuthGuard),
    (0, graphql_1.Mutation)(() => ClinicRating_entity_1.ClinicRatings),
    __param(0, (0, graphql_1.Args)('data')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_ClinicRating_1.updateClinicRating]),
    __metadata("design:returntype", Promise)
], UpdateClinicRatingResolver.prototype, "UpdateClinicRating", null);
exports.UpdateClinicRatingResolver = UpdateClinicRatingResolver = __decorate([
    (0, graphql_1.Resolver)('consultation-type'),
    __metadata("design:paramtypes", [update_rating_service_1.UpdateClinicRatingService])
], UpdateClinicRatingResolver);
//# sourceMappingURL=update-rating.resolver.js.map