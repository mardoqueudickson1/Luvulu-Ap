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
exports.FindAppointmentByDateResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const common_1 = require("@nestjs/common");
const jwt_auth_guard_1 = require("../../../auth/guards/jwt-auth.guard");
const appointments_entity_1 = require("../../entities/appointments.entity");
const finByDate_appointment_service_1 = require("../../usecases/findByDate/finByDate-appointment.service");
let FindAppointmentByDateResolver = class FindAppointmentByDateResolver {
    constructor(appointmentService) {
        this.appointmentService = appointmentService;
    }
    async findAppointmentByDate(doctorId, date) {
        return await this.appointmentService.findByDate(date, doctorId);
    }
};
exports.FindAppointmentByDateResolver = FindAppointmentByDateResolver;
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.GqlAuthGuard),
    (0, graphql_1.Query)(() => appointments_entity_1.Appointments),
    __param(0, (0, graphql_1.Args)('doctorId', { type: () => String })),
    __param(1, (0, graphql_1.Args)('date', { type: () => String })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Date]),
    __metadata("design:returntype", Promise)
], FindAppointmentByDateResolver.prototype, "findAppointmentByDate", null);
exports.FindAppointmentByDateResolver = FindAppointmentByDateResolver = __decorate([
    (0, graphql_1.Resolver)(),
    __metadata("design:paramtypes", [finByDate_appointment_service_1.FindAppointmentByDateService])
], FindAppointmentByDateResolver);
//# sourceMappingURL=findByDate-appointment.resolver.js.map