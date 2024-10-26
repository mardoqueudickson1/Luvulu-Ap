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
exports.FindMedicalHistoryByDoctoryIdResolver = void 0;
const common_1 = require("@nestjs/common");
const jwt_auth_guard_1 = require("../../../auth/guards/jwt-auth.guard");
const graphql_1 = require("@nestjs/graphql");
const find_by_doctorId_service_1 = require("../../usecases/findByDoctorId/find-by-doctorId.service");
const medical_history_entity_1 = require("../../entities/medical-history.entity");
let FindMedicalHistoryByDoctoryIdResolver = class FindMedicalHistoryByDoctoryIdResolver {
    constructor(medicalHistoryService) {
        this.medicalHistoryService = medicalHistoryService;
    }
    async findMedicalHistoryByDoctorId(id) {
        return await this.medicalHistoryService.execute(id);
    }
};
exports.FindMedicalHistoryByDoctoryIdResolver = FindMedicalHistoryByDoctoryIdResolver;
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.GqlAuthGuard),
    (0, graphql_1.Query)(() => medical_history_entity_1.MedicalHistoryEntity),
    __param(0, (0, graphql_1.Args)('id', { type: () => String })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], FindMedicalHistoryByDoctoryIdResolver.prototype, "findMedicalHistoryByDoctorId", null);
exports.FindMedicalHistoryByDoctoryIdResolver = FindMedicalHistoryByDoctoryIdResolver = __decorate([
    (0, graphql_1.Resolver)(),
    __metadata("design:paramtypes", [find_by_doctorId_service_1.FindMedicalHistoryByDoctorIdService])
], FindMedicalHistoryByDoctoryIdResolver);
//# sourceMappingURL=find-by-doctorId.resolver.js.map