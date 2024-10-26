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
exports.ListAllServicesClinicResolver = void 0;
const services_clinic_entity_1 = require("../../entities/services-clinic.entity");
const listaAll_services_clinic_service_1 = require("../../usecases/listAll/listaAll-services-clinic.service");
const graphql_1 = require("@nestjs/graphql");
let ListAllServicesClinicResolver = class ListAllServicesClinicResolver {
    constructor(servicesClinicRepo) {
        this.servicesClinicRepo = servicesClinicRepo;
    }
    async findAllServicesClinic() {
        return await this.servicesClinicRepo.listAll();
    }
};
exports.ListAllServicesClinicResolver = ListAllServicesClinicResolver;
__decorate([
    (0, graphql_1.Query)(() => [services_clinic_entity_1.ServicesClinics]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ListAllServicesClinicResolver.prototype, "findAllServicesClinic", null);
exports.ListAllServicesClinicResolver = ListAllServicesClinicResolver = __decorate([
    (0, graphql_1.Resolver)(() => services_clinic_entity_1.ServicesClinics),
    __metadata("design:paramtypes", [listaAll_services_clinic_service_1.ListAllServicesClinicService])
], ListAllServicesClinicResolver);
//# sourceMappingURL=listAll-services-clinic.resolver.js.map