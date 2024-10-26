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
exports.UpdateRatingResolver = void 0;
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const jwt_auth_guard_1 = require("../../../auth/guards/jwt-auth.guard");
const update_rating_input_1 = require("../../dtos/update-rating.input");
const rating_entity_1 = require("../../entities/rating.entity");
const update_rating_service_1 = require("../../usecases/update/update-rating.service");
let UpdateRatingResolver = class UpdateRatingResolver {
    constructor(repo) {
        this.repo = repo;
    }
    async UpdateRating(data) {
        return await this.repo.update(data.id, data);
    }
};
exports.UpdateRatingResolver = UpdateRatingResolver;
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.GqlAuthGuard),
    (0, graphql_1.Mutation)(() => rating_entity_1.Ratings),
    __param(0, (0, graphql_1.Args)('data')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_rating_input_1.updateRating]),
    __metadata("design:returntype", Promise)
], UpdateRatingResolver.prototype, "UpdateRating", null);
exports.UpdateRatingResolver = UpdateRatingResolver = __decorate([
    (0, graphql_1.Resolver)('consultation-type'),
    __metadata("design:paramtypes", [update_rating_service_1.UpdateRatingService])
], UpdateRatingResolver);
//# sourceMappingURL=update-rating.resolver.js.map