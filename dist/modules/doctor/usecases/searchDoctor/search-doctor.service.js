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
exports.SearchDoctorService = void 0;
const utils_1 = require("../../../../utils/utils");
const IDoctorRepository_1 = require("../../repository/interface/IDoctorRepository");
const common_1 = require("@nestjs/common");
const list_all_top_rated_service_1 = require("../../../doctorRating/usecases/list-all -top-rated/list-all-top-rated.service");
const findPhotoFile_1 = require("../../../../utils/shared/providers/storageProviders/implementations/supaBase/findPhotoFile");
let SearchDoctorService = class SearchDoctorService {
    constructor(doctorRepo) {
        this.doctorRepo = doctorRepo;
    }
    async searchDoctor(name, page) {
        const nameUpperCase = (0, utils_1.toUpperCase)(name);
        const doctors = await this.doctorRepo.SearchDoctor(nameUpperCase, page);
        const result = (0, list_all_top_rated_service_1.calculateDoctorRating)(doctors);
        for (const data of result) {
            if (data.user.avatar !== null) {
                const url = await findPhotoFile_1.findSupabaseFileService.getPhotoUrl(data.user.avatar);
                data.user.avatar = url.toString();
            }
        }
        return result;
    }
};
exports.SearchDoctorService = SearchDoctorService;
exports.SearchDoctorService = SearchDoctorService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [IDoctorRepository_1.IDoctorRepository])
], SearchDoctorService);
//# sourceMappingURL=search-doctor.service.js.map