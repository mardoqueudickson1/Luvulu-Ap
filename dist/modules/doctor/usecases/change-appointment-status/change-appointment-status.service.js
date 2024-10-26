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
exports.ChangeAppointmentStatusService = void 0;
const common_1 = require("@nestjs/common");
const IDoctorRepository_1 = require("../../repository/interface/IDoctorRepository");
const INotificaionRepository_1 = require("../../../notification/repository/interface/INotificaionRepository");
const IAppointmentRepository_1 = require("../../../appointments/repository/interface/IAppointmentRepository");
const errorsMessages_1 = require("../../../../utils/shared/errorsMessages");
let ChangeAppointmentStatusService = class ChangeAppointmentStatusService {
    constructor(repo, notificationRepo, appoitmantRepo) {
        this.repo = repo;
        this.notificationRepo = notificationRepo;
        this.appoitmantRepo = appoitmantRepo;
    }
    async changeStatus(appointmantId, status) {
        try {
            const appointment = await this.repo.changeAppointmentStatus(appointmantId, status);
            const getAppointment = await this.appoitmantRepo.findById(appointmantId);
            await this.notificationRepo.create({
                content: `O status da sua consulta foi alterado para ${appointment.status}!`,
                read: false,
                patient_id: getAppointment.pacient.id,
            });
            return appointment;
        }
        catch (error) {
            throw new common_1.InternalServerErrorException(errorsMessages_1.messages.errorServer);
        }
    }
};
exports.ChangeAppointmentStatusService = ChangeAppointmentStatusService;
exports.ChangeAppointmentStatusService = ChangeAppointmentStatusService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [IDoctorRepository_1.IDoctorRepository,
        INotificaionRepository_1.INotificationRepository,
        IAppointmentRepository_1.IAppointmentRepository])
], ChangeAppointmentStatusService);
//# sourceMappingURL=change-appointment-status.service.js.map