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
exports.calculateOneDoctorRatings = exports.FindOneRatedService = void 0;
const common_1 = require("@nestjs/common");
const IDoctorRatingRepository_1 = require("../../repository/interface/IDoctorRatingRepository");
const findPhotoFile_1 = require("../../../../utils/shared/providers/storageProviders/implementations/supaBase/findPhotoFile");
let FindOneRatedService = class FindOneRatedService {
    constructor(repo) {
        this.repo = repo;
    }
    async findOne(id) {
        const data = await this.repo.findOneDoctorWithRate(id);
        if (data.user.avatar !== null) {
            const url = await findPhotoFile_1.findSupabaseFileService.getPhotoUrl(data.user.avatar);
            data.user.avatar = url.toString();
        }
        const result = calculateOneDoctorRatings(data);
        return result;
    }
};
exports.FindOneRatedService = FindOneRatedService;
exports.FindOneRatedService = FindOneRatedService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [IDoctorRatingRepository_1.IRatingRepository])
], FindOneRatedService);
function calculateOneDoctorRatings(doctor) {
    const totalRating = doctor.rating.reduce((total, rating) => total + rating.rate, 0);
    let averageRating = totalRating / doctor.rating.length;
    if (averageRating === undefined || isNaN(averageRating)) {
        averageRating = 0;
    }
    const response = {
        pacientCared: doctor.pacientCared,
        isFavorited: doctor.isFavorited,
        specialty: doctor.specialty,
        bio: doctor.bio,
        registrationNumber: doctor.registrationNumber,
        user: doctor.user,
        rating: doctor.rating,
        institutions: doctor.institutions,
        totalRating: totalRating,
        averageRating: averageRating % 1 === 0
            ? averageRating.toFixed(1)
            : parseFloat(averageRating.toFixed(1)),
    };
    return response;
}
exports.calculateOneDoctorRatings = calculateOneDoctorRatings;
//# sourceMappingURL=find-one-rated.service.js.map