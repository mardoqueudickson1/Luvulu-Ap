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
exports.ProfilePatientResolver = void 0;
const current_user_decorator_1 = require("../../../auth/decorator/current-user.decorator");
const jwt_auth_guard_1 = require("../../../auth/guards/jwt-auth.guard");
const profile_patient_output_1 = require("../../dtos/profile-patient.output");
const perfil_patitient_service_1 = require("../../usecases/perfil/perfil-patitient.service");
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
let ProfilePatientResolver = class ProfilePatientResolver {
    constructor(patientService) {
        this.patientService = patientService;
    }
    async PatientProfile(user) {
        return await this.patientService.profile(user.userId);
    }
};
exports.ProfilePatientResolver = ProfilePatientResolver;
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.GqlAuthGuard),
    (0, graphql_1.Query)(() => profile_patient_output_1.PatientProfileOutput),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProfilePatientResolver.prototype, "PatientProfile", null);
exports.ProfilePatientResolver = ProfilePatientResolver = __decorate([
    (0, graphql_1.Resolver)(),
    __metadata("design:paramtypes", [perfil_patitient_service_1.ProfilePatientService])
], ProfilePatientResolver);
//# sourceMappingURL=perfil-patient.resolver.js.map