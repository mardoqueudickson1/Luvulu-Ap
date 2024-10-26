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
exports.CreateMedicalReportResolver = void 0;
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const current_user_decorator_1 = require("../../../auth/decorator/current-user.decorator");
const jwt_auth_guard_1 = require("../../../auth/guards/jwt-auth.guard");
const medical_report_entity_1 = require("../../entities/medical-report.entity");
const create_medical_report_service_1 = require("../../usecases/create/create-medical-report.service");
const create_medical_report_input_1 = require("../../dtos/create-medical-report.input");
let CreateMedicalReportResolver = class CreateMedicalReportResolver {
    constructor(repo) {
        this.repo = repo;
    }
    async createMedicalReport(input, user) {
        input.doctorId = user.userId;
        return await this.repo.create(input);
    }
};
exports.CreateMedicalReportResolver = CreateMedicalReportResolver;
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.GqlAuthGuard),
    (0, graphql_1.Mutation)(() => medical_report_entity_1.MedicalReports),
    __param(0, (0, graphql_1.Args)('data')),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_medical_report_input_1.CreateMedicalReport, Object]),
    __metadata("design:returntype", Promise)
], CreateMedicalReportResolver.prototype, "createMedicalReport", null);
exports.CreateMedicalReportResolver = CreateMedicalReportResolver = __decorate([
    (0, graphql_1.Resolver)('medical-report'),
    __metadata("design:paramtypes", [create_medical_report_service_1.CreateMedicalReportService])
], CreateMedicalReportResolver);
//# sourceMappingURL=create-medical-report.resolver.js.map