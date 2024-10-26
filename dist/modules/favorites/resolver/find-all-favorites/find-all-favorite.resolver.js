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
exports.FindAllFavoriteResolver = void 0;
const jwt_auth_guard_1 = require("../../../auth/guards/jwt-auth.guard");
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const current_user_decorator_1 = require("../../../auth/decorator/current-user.decorator");
const favorite_response_1 = require("../../dtos/favorite-response");
const find_all_favorite_service_1 = require("../../usecases/find-all-favorite/find-all-favorite.service");
let FindAllFavoriteResolver = class FindAllFavoriteResolver {
    constructor(repo) {
        this.repo = repo;
    }
    async findAllFavorites(user) {
        return await this.repo.findAll(user.userId);
    }
};
exports.FindAllFavoriteResolver = FindAllFavoriteResolver;
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.GqlAuthGuard),
    (0, graphql_1.Query)(() => [favorite_response_1.ResponseAllFavotites]),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], FindAllFavoriteResolver.prototype, "findAllFavorites", null);
exports.FindAllFavoriteResolver = FindAllFavoriteResolver = __decorate([
    (0, graphql_1.Resolver)(),
    __metadata("design:paramtypes", [find_all_favorite_service_1.FindAllFavoriteService])
], FindAllFavoriteResolver);
//# sourceMappingURL=find-all-favorite.resolver.js.map