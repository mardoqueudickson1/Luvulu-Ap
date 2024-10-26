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
exports.RemoveRatingResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const common_1 = require("@nestjs/common");
const jwt_auth_guard_1 = require("../../../auth/guards/jwt-auth.guard");
const remove_rating_service_1 = require("../../usecases/remove/remove-rating.service");
const rating_entity_1 = require("../../entities/rating.entity");
let RemoveRatingResolver = class RemoveRatingResolver {
    constructor(repo) {
        this.repo = repo;
    }
    async RemoveRating(id) {
        return await this.repo.remove(id);
    }
};
exports.RemoveRatingResolver = RemoveRatingResolver;
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.GqlAuthGuard),
    (0, graphql_1.Query)(() => rating_entity_1.Ratings),
    __param(0, (0, graphql_1.Args)('id', { type: () => String })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], RemoveRatingResolver.prototype, "RemoveRating", null);
exports.RemoveRatingResolver = RemoveRatingResolver = __decorate([
    (0, graphql_1.Resolver)(),
    __metadata("design:paramtypes", [remove_rating_service_1.RemoveRatingService])
], RemoveRatingResolver);
//# sourceMappingURL=remove-rating.resolver.js.map