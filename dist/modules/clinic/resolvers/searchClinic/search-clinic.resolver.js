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
exports.FindSearchClinicResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const findAll_clinic_output_1 = require("../../dtos/findAll-clinic.output");
const search_clinic_service_1 = require("../../usecases/searchClinic/search-clinic.service");
let FindSearchClinicResolver = class FindSearchClinicResolver {
    constructor(repo) {
        this.repo = repo;
    }
    async SearchClinic(name, page) {
        return await this.repo.Search(name, page);
    }
};
exports.FindSearchClinicResolver = FindSearchClinicResolver;
__decorate([
    (0, graphql_1.Query)(() => [findAll_clinic_output_1.NearByclinicResponse]),
    __param(0, (0, graphql_1.Args)('name')),
    __param(1, (0, graphql_1.Args)('page')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number]),
    __metadata("design:returntype", Promise)
], FindSearchClinicResolver.prototype, "SearchClinic", null);
exports.FindSearchClinicResolver = FindSearchClinicResolver = __decorate([
    (0, graphql_1.Resolver)(),
    __metadata("design:paramtypes", [search_clinic_service_1.SearchClinicService])
], FindSearchClinicResolver);
//# sourceMappingURL=search-clinic.resolver.js.map