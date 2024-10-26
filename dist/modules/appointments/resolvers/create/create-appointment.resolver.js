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
exports.CreateAppointmentResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const current_user_decorator_1 = require("../../../auth/decorator/current-user.decorator");
const common_1 = require("@nestjs/common");
const jwt_auth_guard_1 = require("../../../auth/guards/jwt-auth.guard");
const create_appointment_service_1 = require("../../usecases/create/create-appointment.service");
const appointments_entity_1 = require("../../entities/appointments.entity");
const create_appointment_input_1 = require("../../dtos/create-appointment.input");
let CreateAppointmentResolver = class CreateAppointmentResolver {
    constructor(appointmentService) {
        this.appointmentService = appointmentService;
    }
    async createAppointment(user, appointmentInput) {
        appointmentInput.patientId = user.id;
        return await this.appointmentService.create(appointmentInput);
    }
};
exports.CreateAppointmentResolver = CreateAppointmentResolver;
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.GqlAuthGuard),
    (0, graphql_1.Mutation)(() => appointments_entity_1.Appointments),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, graphql_1.Args)('appointmentInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_appointment_input_1.CreateAppointInput]),
    __metadata("design:returntype", Promise)
], CreateAppointmentResolver.prototype, "createAppointment", null);
exports.CreateAppointmentResolver = CreateAppointmentResolver = __decorate([
    (0, graphql_1.Resolver)('appointment'),
    __metadata("design:paramtypes", [create_appointment_service_1.CreateAppointmentService])
], CreateAppointmentResolver);
//# sourceMappingURL=create-appointment.resolver.js.map