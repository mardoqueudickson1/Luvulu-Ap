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
exports.CreateAppointmentService = void 0;
const IAppointmentRepository_1 = require("../../repository/interface/IAppointmentRepository");
const common_1 = require("@nestjs/common");
const date_fns_1 = require("date-fns");
const IWeeklyScheduleRepository_1 = require("../../../weeklySchedule/repository/interface/IWeeklyScheduleRepository");
const INotificaionRepository_1 = require("../../../notification/repository/interface/INotificaionRepository");
const IMedicalHistoryRepository_1 = require("../../../MedicalHistory/repository/interface/IMedicalHistoryRepository");
const client_1 = require("@prisma/client");
const IClinicRepository_1 = require("../../../clinic/repository/interface/IClinicRepository");
const IPatientRepository_1 = require("../../../patient/repository/interface/IPatientRepository");
const sendPushNotification_1 = require("../../../../utils/sendPushNotification");
let CreateAppointmentService = class CreateAppointmentService {
    constructor(appointmentRepo, weeklyScheduleRepo, notificationRepo, medicalRepoHistory, institutionRepo, patientRepo) {
        this.appointmentRepo = appointmentRepo;
        this.weeklyScheduleRepo = weeklyScheduleRepo;
        this.notificationRepo = notificationRepo;
        this.medicalRepoHistory = medicalRepoHistory;
        this.institutionRepo = institutionRepo;
        this.patientRepo = patientRepo;
    }
    async create(appointInput) {
        try {
            const appointmentDate = (0, date_fns_1.startOfHour)(appointInput.date);
            if ((0, date_fns_1.isBefore)(appointmentDate, Date.now())) {
                throw new common_1.BadRequestException('Você não pode criar um compromisso em uma data anterior');
            }
            if (appointInput.patientId === appointInput.doctorId) {
                throw new common_1.BadRequestException('Você não pode criar um Agendamento consigo mesmo');
            }
            const existingAppointment = await this.appointmentRepo.findByDate(appointInput.date, appointInput.doctorId);
            if (existingAppointment) {
                throw new common_1.BadRequestException('Este horário já está agendado para outro paciente');
            }
            const createdAppointment = await this.appointmentRepo.create({
                consultationTypeId: appointInput.consultationTypeId,
                doctorId: appointInput.doctorId,
                institutionId: appointInput.institutionId,
                patientId: appointInput.patientId,
                isUrgent: appointInput.isUrgent,
                symptomDescription: appointInput.symptomDescription,
                date: appointInput.date,
                status: client_1.AppointmentStatus.PENDING,
            });
            await this.medicalRepoHistory.create({
                appointmentId: createdAppointment.id,
            });
            const patient = await this.patientRepo.findById(createdAppointment.patientId);
            const institutions = await this.institutionRepo.findById(appointInput.institutionId);
            const dateFormatted = (0, date_fns_1.format)(appointmentDate, "dd/MM/yyyy 'às' HH:mm'h'");
            const notify = await this.notificationRepo.create({
                appointmentId: createdAppointment.id,
                institution_id: createdAppointment.institutionId,
                type: client_1.TypeNotification.APPOINTMENT,
                doctor_id: createdAppointment.doctorId,
                content: `Um novo agendamento foi marcado por ${patient.user.name}, para o dia ${dateFormatted}
       `,
                read: false,
            });
            if (institutions.token !== null) {
                const pushInput = {
                    title: 'Luvulu',
                    message: notify.content,
                    token: institutions.token,
                };
                await (0, sendPushNotification_1.SendPushNotification)(pushInput);
            }
            const institutionNumber = institutions.user.phone;
            const notificationMessage = 'Mensagem de teste';
            return createdAppointment;
        }
        catch (error) {
            throw error;
        }
    }
};
exports.CreateAppointmentService = CreateAppointmentService;
exports.CreateAppointmentService = CreateAppointmentService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [IAppointmentRepository_1.IAppointmentRepository,
        IWeeklyScheduleRepository_1.IWeeklyScheduleRepository,
        INotificaionRepository_1.INotificationRepository,
        IMedicalHistoryRepository_1.IMedicalHistoryRepository,
        IClinicRepository_1.IClinicRepository,
        IPatientRepository_1.IPatientRepository])
], CreateAppointmentService);
//# sourceMappingURL=create-appointment.service.js.map