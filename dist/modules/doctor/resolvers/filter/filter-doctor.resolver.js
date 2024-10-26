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
exports.FilterDoctorResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const filter_doctor_service_1 = require("../../usecases/filter/filter-doctor.service");
const doctor_filter_option_1 = require("../../dtos/doctor-filter-option");
const topRatedDoctors_1 = require("../../../doctorRating/dtos/topRatedDoctors");
let FilterDoctorResolver = class FilterDoctorResolver {
    constructor(repo) {
        this.repo = repo;
    }
    async filterDoctor(data) {
        return await this.repo.filterDoctor(data);
    }
};
exports.FilterDoctorResolver = FilterDoctorResolver;
__decorate([
    (0, graphql_1.Query)(() => [topRatedDoctors_1.TopResponseAllDoctor]),
    __param(0, (0, graphql_1.Args)('data')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [doctor_filter_option_1.DoctorFilterOptions]),
    __metadata("design:returntype", Promise)
], FilterDoctorResolver.prototype, "filterDoctor", null);
exports.FilterDoctorResolver = FilterDoctorResolver = __decorate([
    (0, graphql_1.Resolver)(),
    __metadata("design:paramtypes", [filter_doctor_service_1.FilterDoctorService])
], FilterDoctorResolver);
//# sourceMappingURL=filter-doctor.resolver.js.map