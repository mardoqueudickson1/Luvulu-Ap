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
exports.FindAllSpecialityResolver = void 0;
const jwt_auth_guard_1 = require("../../../auth/guards/jwt-auth.guard");
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const listaAll_services_clinic_service_1 = require("../../usecases/listAll/listaAll-services-clinic.service");
const specialiaty_output_1 = require("../../dtos/specialiaty-output");
let FindAllSpecialityResolver = class FindAllSpecialityResolver {
    constructor(servicesRepo) {
        this.servicesRepo = servicesRepo;
    }
    async findALlSpeciality() {
        return await this.servicesRepo.listAll();
    }
};
exports.FindAllSpecialityResolver = FindAllSpecialityResolver;
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.GqlAuthGuard),
    (0, graphql_1.Query)(() => [specialiaty_output_1.SpecialityResponse]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], FindAllSpecialityResolver.prototype, "findALlSpeciality", null);
exports.FindAllSpecialityResolver = FindAllSpecialityResolver = __decorate([
    (0, graphql_1.Resolver)(),
    __metadata("design:paramtypes", [listaAll_services_clinic_service_1.ListAllSpecialityService])
], FindAllSpecialityResolver);
//# sourceMappingURL=listAll-speciality.resolver.js.map