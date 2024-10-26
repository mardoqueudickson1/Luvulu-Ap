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
exports.FindAllRatingResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const rating_entity_1 = require("../../entities/rating.entity");
const list_all_rating_service_1 = require("../../usecases/list-all/list-all-rating.service");
let FindAllRatingResolver = class FindAllRatingResolver {
    constructor(repo) {
        this.repo = repo;
    }
    async findAllRating() {
        return await this.repo.findAll();
    }
};
exports.FindAllRatingResolver = FindAllRatingResolver;
__decorate([
    (0, graphql_1.Query)(() => [rating_entity_1.Ratings]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], FindAllRatingResolver.prototype, "findAllRating", null);
exports.FindAllRatingResolver = FindAllRatingResolver = __decorate([
    (0, graphql_1.Resolver)(),
    __metadata("design:paramtypes", [list_all_rating_service_1.ListAllRatingService])
], FindAllRatingResolver);
//# sourceMappingURL=find-all-rating.resolver.js.map