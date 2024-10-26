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
exports.ChangeAppointmantStatusResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const client_1 = require("@prisma/client");
const IDoctorRepository_1 = require("../../repository/interface/IDoctorRepository");
const appointments_entity_1 = require("../../../appointments/entities/appointments.entity");
let ChangeAppointmantStatusResolver = class ChangeAppointmantStatusResolver {
    constructor(doctorService) {
        this.doctorService = doctorService;
    }
    async changeAppointmantStatusByDoctor(appointmantId, status) {
        return await this.doctorService.changeAppointmentStatus(appointmantId, status);
    }
};
exports.ChangeAppointmantStatusResolver = ChangeAppointmantStatusResolver;
__decorate([
    (0, graphql_1.Mutation)(() => appointments_entity_1.Appointments),
    __param(0, (0, graphql_1.Args)('appointmantId')),
    __param(1, (0, graphql_1.Args)('status')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], ChangeAppointmantStatusResolver.prototype, "changeAppointmantStatusByDoctor", null);
exports.ChangeAppointmantStatusResolver = ChangeAppointmantStatusResolver = __decorate([
    (0, graphql_1.Resolver)('ChangeAppointmantStatusResolver'),
    __metadata("design:paramtypes", [IDoctorRepository_1.IDoctorRepository])
], ChangeAppointmantStatusResolver);
//# sourceMappingURL=change-appointmant-status.resolver.js.map