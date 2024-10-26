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
exports.CreateClinicRatingService = void 0;
const common_1 = require("@nestjs/common");
const IClinicRatingRepository_1 = require("../../repository/interface/IClinicRatingRepository");
const errorsMessages_1 = require("../../../../utils/shared/errorsMessages");
let CreateClinicRatingService = class CreateClinicRatingService {
    constructor(repo) {
        this.repo = repo;
    }
    async create(data) {
        try {
            const existingRating = await this.repo.findUserRatingForClinic(data.userId, data.clinicId);
            if (data.rate <= 0 || data.rate > 5) {
                throw new common_1.BadRequestException(errorsMessages_1.messages.OverStars);
            }
            if (existingRating) {
                const updatedRating = await this.repo.update(existingRating.id, data);
                return updatedRating;
            }
            else {
                return await this.repo.create({
                    userId: data.userId,
                    clinicId: data.clinicId,
                    rate: data.rate,
                    comment: data.comment,
                });
            }
        }
        catch (error) {
            throw error;
        }
    }
};
exports.CreateClinicRatingService = CreateClinicRatingService;
exports.CreateClinicRatingService = CreateClinicRatingService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [IClinicRatingRepository_1.IClinicRatingRepository])
], CreateClinicRatingService);
//# sourceMappingURL=create-rating.service.js.map