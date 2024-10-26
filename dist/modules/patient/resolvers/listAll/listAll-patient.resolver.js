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
exports.ListAllPatientResolver = void 0;
const jwt_auth_guard_1 = require("../../../auth/guards/jwt-auth.guard");
const findAllPatientReponse_1 = require("../../dtos/findAllPatientReponse");
const listaAll_patitient_service_1 = require("../../usecases/listAll/listaAll-patitient.service");
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
let ListAllPatientResolver = class ListAllPatientResolver {
    constructor(patientService) {
        this.patientService = patientService;
    }
    async findAllPatient() {
        return await this.patientService.listAll();
    }
};
exports.ListAllPatientResolver = ListAllPatientResolver;
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.GqlAuthGuard),
    (0, graphql_1.Query)(() => [findAllPatientReponse_1.FindAllPatientResponse]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ListAllPatientResolver.prototype, "findAllPatient", null);
exports.ListAllPatientResolver = ListAllPatientResolver = __decorate([
    (0, graphql_1.Resolver)(() => findAllPatientReponse_1.FindAllPatientResponse),
    __metadata("design:paramtypes", [listaAll_patitient_service_1.ListAllPatientService])
], ListAllPatientResolver);
//# sourceMappingURL=listAll-patient.resolver.js.map