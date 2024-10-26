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
exports.FindAppointmentByClinicIdResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const common_1 = require("@nestjs/common");
const jwt_auth_guard_1 = require("../../../auth/guards/jwt-auth.guard");
const find_by_clinicId_appointment_service_1 = require("../../usecases/findByClinicId/find-by-clinicId-appointment.service");
const current_user_decorator_1 = require("../../../auth/decorator/current-user.decorator");
const responseAllAppointmentByClinic_1 = require("../../dtos/responseAllAppointmentByClinic");
let FindAppointmentByClinicIdResolver = class FindAppointmentByClinicIdResolver {
    constructor(appointmentService) {
        this.appointmentService = appointmentService;
    }
    async findAppointmentByClinicId(clinicId) {
        return await this.appointmentService.execute(clinicId.userId);
    }
};
exports.FindAppointmentByClinicIdResolver = FindAppointmentByClinicIdResolver;
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.GqlAuthGuard),
    (0, graphql_1.Query)(() => [responseAllAppointmentByClinic_1.ResponseAllAppointClinic]),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], FindAppointmentByClinicIdResolver.prototype, "findAppointmentByClinicId", null);
exports.FindAppointmentByClinicIdResolver = FindAppointmentByClinicIdResolver = __decorate([
    (0, graphql_1.Resolver)(),
    __metadata("design:paramtypes", [find_by_clinicId_appointment_service_1.FindAppointmentByClinicIdService])
], FindAppointmentByClinicIdResolver);
//# sourceMappingURL=find-by-clinicId-appointment.resolver.js.map