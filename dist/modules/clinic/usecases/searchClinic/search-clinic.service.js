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
exports.SearchClinicService = void 0;
const list_all_top_rated_service_1 = require("../../../clinicRating/usecases/list-all -top-rated/list-all-top-rated.service");
const IClinicRepository_1 = require("../../repository/interface/IClinicRepository");
const common_1 = require("@nestjs/common");
let SearchClinicService = class SearchClinicService {
    constructor(clinicRepo) {
        this.clinicRepo = clinicRepo;
    }
    async Search(name, page) {
        const Uppername = name.toLocaleUpperCase();
        const clinic = await this.clinicRepo.SearchForClinic(Uppername, page);
        const result = (0, list_all_top_rated_service_1.calculateClinicRatings)(clinic);
        return result;
    }
};
exports.SearchClinicService = SearchClinicService;
exports.SearchClinicService = SearchClinicService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [IClinicRepository_1.IClinicRepository])
], SearchClinicService);
//# sourceMappingURL=search-clinic.service.js.map