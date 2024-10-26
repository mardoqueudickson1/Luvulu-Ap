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
exports.RemovePatientResolver = void 0;
const jwt_auth_guard_1 = require("../../../auth/guards/jwt-auth.guard");
const patient_entity_1 = require("../../../patient/entities/patient.entity");
const remove_patitient_service_1 = require("../../../patient/usecases/remove/remove-patitient.service");
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
let RemovePatientResolver = class RemovePatientResolver {
    constructor(patientService) {
        this.patientService = patientService;
    }
    async removePatient(id) {
        return await this.patientService.remove(id);
    }
};
exports.RemovePatientResolver = RemovePatientResolver;
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.GqlAuthGuard),
    (0, graphql_1.Mutation)(() => patient_entity_1.Patients),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], RemovePatientResolver.prototype, "removePatient", null);
exports.RemovePatientResolver = RemovePatientResolver = __decorate([
    (0, graphql_1.Resolver)('patient'),
    __metadata("design:paramtypes", [remove_patitient_service_1.RemovePatientService])
], RemovePatientResolver);
//# sourceMappingURL=remove-patient.resolver.js.map