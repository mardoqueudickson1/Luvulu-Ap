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
exports.listClinicOfDoctorResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const response_all_doctor_1 = require("../../dtos/response-all-doctor");
const list_all_clinic_OfDoctor_service_1 = require("../../usecases/findClinicOfDoctor/list-all-clinic-OfDoctor.service");
let listClinicOfDoctorResolver = class listClinicOfDoctorResolver {
    constructor(doctorService) {
        this.doctorService = doctorService;
    }
    async findAllClinicOfDoctor(doctor_id) {
        return await this.doctorService.listClinicOfDoctor(doctor_id);
    }
};
exports.listClinicOfDoctorResolver = listClinicOfDoctorResolver;
__decorate([
    (0, graphql_1.Query)(() => [response_all_doctor_1.InstitutionIResponse]),
    __param(0, (0, graphql_1.Args)('doctor_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], listClinicOfDoctorResolver.prototype, "findAllClinicOfDoctor", null);
exports.listClinicOfDoctorResolver = listClinicOfDoctorResolver = __decorate([
    (0, graphql_1.Resolver)(),
    __metadata("design:paramtypes", [list_all_clinic_OfDoctor_service_1.listClinicOfDoctorService])
], listClinicOfDoctorResolver);
//# sourceMappingURL=list-all-clinic-OfDoctor.resolver.js.map