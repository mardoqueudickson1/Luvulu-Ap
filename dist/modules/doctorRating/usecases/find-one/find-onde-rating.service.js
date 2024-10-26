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
exports.FindOneRatingService = void 0;
const common_1 = require("@nestjs/common");
const errorsMessages_1 = require("../../../../utils/shared/errorsMessages");
const IDoctorRatingRepository_1 = require("../../repository/interface/IDoctorRatingRepository");
let FindOneRatingService = class FindOneRatingService {
    constructor(repo) {
        this.repo = repo;
    }
    async findOne(id) {
        const rating = await this.repo.findById(id);
        if (!rating) {
            throw new common_1.NotFoundException(errorsMessages_1.messages.RatingNotFoun);
        }
        return await this.repo.findById(id);
    }
};
exports.FindOneRatingService = FindOneRatingService;
exports.FindOneRatingService = FindOneRatingService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [IDoctorRatingRepository_1.IRatingRepository])
], FindOneRatingService);
//# sourceMappingURL=find-onde-rating.service.js.map