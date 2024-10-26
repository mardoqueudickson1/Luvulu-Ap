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
exports.CreateClinicResolver = void 0;
const create_clinic_input_1 = require("../../dtos/create-clinic.input");
const clinic_1 = require("../../entities/clinic");
const create_clinic_service_1 = require("../../usecases/create/create-clinic.service");
const graphql_1 = require("@nestjs/graphql");
let CreateClinicResolver = class CreateClinicResolver {
    constructor(clinicService) {
        this.clinicService = clinicService;
    }
    async createClinic(createClinicDTO) {
        return await this.clinicService.create(createClinicDTO);
    }
};
exports.CreateClinicResolver = CreateClinicResolver;
__decorate([
    (0, graphql_1.Mutation)(() => clinic_1.Clinics),
    __param(0, (0, graphql_1.Args)('data')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_clinic_input_1.CreateClinicInput]),
    __metadata("design:returntype", Promise)
], CreateClinicResolver.prototype, "createClinic", null);
exports.CreateClinicResolver = CreateClinicResolver = __decorate([
    (0, graphql_1.Resolver)('clinic'),
    __metadata("design:paramtypes", [create_clinic_service_1.CreateClinicService])
], CreateClinicResolver);
//# sourceMappingURL=create-clinic.resolver.js.map