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
exports.CreateRatingService = void 0;
const common_1 = require("@nestjs/common");
const IDoctorRatingRepository_1 = require("../../repository/interface/IDoctorRatingRepository");
const errorsMessages_1 = require("../../../../utils/shared/errorsMessages");
let CreateRatingService = class CreateRatingService {
    constructor(repo) {
        this.repo = repo;
    }
    async create(data) {
        try {
            const existingRating = await this.repo.findUserRatingForDoctor(data.userId, data.doctorId);
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
                    doctorId: data.doctorId,
                    rate: data.rate,
                    comment: data.comment,
                    appoitmentID: data.appoitmentID,
                });
            }
        }
        catch (error) {
            throw error;
        }
    }
};
exports.CreateRatingService = CreateRatingService;
exports.CreateRatingService = CreateRatingService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [IDoctorRatingRepository_1.IRatingRepository])
], CreateRatingService);
//# sourceMappingURL=create-rating.service.js.map