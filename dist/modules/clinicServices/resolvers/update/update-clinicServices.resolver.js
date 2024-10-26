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
exports.UpdateClinicServicesResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const update_clinic_services_input_1 = require("../../dtos/update-clinic-services.input");
const services_clinic_entity_1 = require("../../entities/services-clinic.entity");
const update_clinicService_service_1 = require("../../usecases/update/update-clinicService.service");
const common_1 = require("@nestjs/common");
const jwt_auth_guard_1 = require("../../../auth/guards/jwt-auth.guard");
let UpdateClinicServicesResolver = class UpdateClinicServicesResolver {
    constructor(servicesClinic) {
        this.servicesClinic = servicesClinic;
    }
    async updateServicesClinic(clinicId, data) {
        return await this.servicesClinic.update(clinicId, data);
    }
};
exports.UpdateClinicServicesResolver = UpdateClinicServicesResolver;
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.GqlAuthGuard),
    (0, graphql_1.Mutation)(() => services_clinic_entity_1.ServicesClinics),
    __param(0, (0, graphql_1.Args)('clinicId')),
    __param(1, (0, graphql_1.Args)('data')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_clinic_services_input_1.UpdateClinicServicesInput]),
    __metadata("design:returntype", Promise)
], UpdateClinicServicesResolver.prototype, "updateServicesClinic", null);
exports.UpdateClinicServicesResolver = UpdateClinicServicesResolver = __decorate([
    (0, graphql_1.Resolver)('ServicesClinics'),
    __metadata("design:paramtypes", [update_clinicService_service_1.UpdateServicesClinicService])
], UpdateClinicServicesResolver);
//# sourceMappingURL=update-clinicServices.resolver.js.map