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
exports.PatientCancelAppointmentResolver = void 0;
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const pacient_cancel_appointment_service_1 = require("../../usecases/pacient-cancel-appointment/pacient-cancel-appointment.service");
const appointments_entity_1 = require("../../../appointments/entities/appointments.entity");
const jwt_auth_guard_1 = require("../../../auth/guards/jwt-auth.guard");
let PatientCancelAppointmentResolver = class PatientCancelAppointmentResolver {
    constructor(repo) {
        this.repo = repo;
    }
    async patientCancelAppointment(id) {
        return await this.repo.changeStatus(id);
    }
};
exports.PatientCancelAppointmentResolver = PatientCancelAppointmentResolver;
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.GqlAuthGuard),
    (0, graphql_1.Mutation)(() => appointments_entity_1.Appointments),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PatientCancelAppointmentResolver.prototype, "patientCancelAppointment", null);
exports.PatientCancelAppointmentResolver = PatientCancelAppointmentResolver = __decorate([
    (0, graphql_1.Resolver)(),
    __metadata("design:paramtypes", [pacient_cancel_appointment_service_1.PatientCancelAppointmentService])
], PatientCancelAppointmentResolver);
//# sourceMappingURL=pacient-cancel-appointment.resolver.js.map