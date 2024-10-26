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
Object.defineProperty(exports, "__esModule", { value: true });
exports.PatientCancelAppointmentService = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
const INotificaionRepository_1 = require("../../../notification/repository/interface/INotificaionRepository");
const IAppointmentRepository_1 = require("../../../appointments/repository/interface/IAppointmentRepository");
const IPatientRepository_1 = require("../../repository/interface/IPatientRepository");
let PatientCancelAppointmentService = class PatientCancelAppointmentService {
    constructor(repo, notificationRepo, appoitmantRepo) {
        this.repo = repo;
        this.notificationRepo = notificationRepo;
        this.appoitmantRepo = appoitmantRepo;
    }
    async changeStatus(appointmantId) {
        try {
            const appointment = await this.repo.changeAppointmentStatus(appointmantId, client_1.AppointmentStatus.CANCELED);
            const getAppointment = await this.appoitmantRepo.findById(appointmantId);
            await this.notificationRepo.create({
                content: `O paciente ${getAppointment.pacient.name} fez o cancelamento de sua consulta`,
                read: false,
                doctor_id: getAppointment.doctorId,
            });
            await this.notificationRepo.create({
                content: `O paciente ${getAppointment.pacient.name} fez o cancelamento de sua consulta`,
                read: false,
                institution_id: getAppointment.institutionId,
            });
            return appointment;
        }
        catch (error) {
            throw error;
        }
    }
};
exports.PatientCancelAppointmentService = PatientCancelAppointmentService;
exports.PatientCancelAppointmentService = PatientCancelAppointmentService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [IPatientRepository_1.IPatientRepository,
        INotificaionRepository_1.INotificationRepository,
        IAppointmentRepository_1.IAppointmentRepository])
], PatientCancelAppointmentService);
//# sourceMappingURL=pacient-cancel-appointment.service.js.map