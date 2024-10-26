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
exports.RemoveFavoriteResolver = void 0;
const jwt_auth_guard_1 = require("../../../auth/guards/jwt-auth.guard");
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const create_favorite_input_1 = require("../../dtos/create-favorite-input");
const favorite_entity_1 = require("../../entity/favorite.entity");
const current_user_decorator_1 = require("../../../auth/decorator/current-user.decorator");
const remove_favorite_service_1 = require("../../usecases/remove-favorite/remove-favorite.service");
let RemoveFavoriteResolver = class RemoveFavoriteResolver {
    constructor(repo) {
        this.repo = repo;
    }
    async RemoveFavorite(input, user) {
        input.pacientId = user.userId;
        return await this.repo.remove(input);
    }
};
exports.RemoveFavoriteResolver = RemoveFavoriteResolver;
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.GqlAuthGuard),
    (0, graphql_1.Mutation)(() => favorite_entity_1.Favorite),
    __param(0, (0, graphql_1.Args)('data')),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_favorite_input_1.RemoveFavorite, Object]),
    __metadata("design:returntype", Promise)
], RemoveFavoriteResolver.prototype, "RemoveFavorite", null);
exports.RemoveFavoriteResolver = RemoveFavoriteResolver = __decorate([
    (0, graphql_1.Resolver)('favorites'),
    __metadata("design:paramtypes", [remove_favorite_service_1.RemoveFavoriteService])
], RemoveFavoriteResolver);
//# sourceMappingURL=remove-favorite.resolver.js.map