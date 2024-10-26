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
exports.CreateSpecialityResolver = void 0;
const jwt_auth_guard_1 = require("../../../auth/guards/jwt-auth.guard");
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const create_specialiaty_input_1 = require("../../dtos/create-specialiaty.input");
const specialiaty_entity_1 = require("../../entities/specialiaty.entity");
const create_services_clinic_service_1 = require("../../usecases/create/create-services-clinic.service");
let CreateSpecialityResolver = class CreateSpecialityResolver {
    constructor(servicesRepo) {
        this.servicesRepo = servicesRepo;
    }
    async createSpeciality(input) {
        return await this.servicesRepo.create(input);
    }
};
exports.CreateSpecialityResolver = CreateSpecialityResolver;
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.GqlAuthGuard),
    (0, graphql_1.Mutation)(() => specialiaty_entity_1.Specialities),
    __param(0, (0, graphql_1.Args)('data')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_specialiaty_input_1.CreateSpecialityInput]),
    __metadata("design:returntype", Promise)
], CreateSpecialityResolver.prototype, "createSpeciality", null);
exports.CreateSpecialityResolver = CreateSpecialityResolver = __decorate([
    (0, graphql_1.Resolver)('services-clinic'),
    __metadata("design:paramtypes", [create_services_clinic_service_1.CreateSpecialityService])
], CreateSpecialityResolver);
//# sourceMappingURL=create-speciality.resolver.js.map