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
exports.ClinicChangeAppointmantStatusResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const client_1 = require("@prisma/client");
const appointments_entity_1 = require("../../../appointments/entities/appointments.entity");
const change_appointment_status_service_1 = require("../../usecases/change-appointment-status/change-appointment-status.service");
const jwt_auth_guard_1 = require("../../../auth/guards/jwt-auth.guard");
const common_1 = require("@nestjs/common");
let ClinicChangeAppointmantStatusResolver = class ClinicChangeAppointmantStatusResolver {
    constructor(clinicService) {
        this.clinicService = clinicService;
    }
    async ClinicchangeAppointmantStatus(appointmantId, status) {
        return await this.clinicService.changeStatus(appointmantId, status);
    }
};
exports.ClinicChangeAppointmantStatusResolver = ClinicChangeAppointmantStatusResolver;
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.GqlAuthGuard),
    (0, graphql_1.Mutation)(() => appointments_entity_1.Appointments),
    __param(0, (0, graphql_1.Args)('appointmantId')),
    __param(1, (0, graphql_1.Args)('status')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], ClinicChangeAppointmantStatusResolver.prototype, "ClinicchangeAppointmantStatus", null);
exports.ClinicChangeAppointmantStatusResolver = ClinicChangeAppointmantStatusResolver = __decorate([
    (0, graphql_1.Resolver)('ClinicChangeAppointmantStatusResolver'),
    __metadata("design:paramtypes", [change_appointment_status_service_1.ClinicChangeAppointmentStatusService])
], ClinicChangeAppointmantStatusResolver);
//# sourceMappingURL=change-appointmant-status.resolver.js.map