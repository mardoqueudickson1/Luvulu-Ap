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
exports.PrismaMedicalHistoryRepositoy = void 0;
const prisma_service_1 = require("../../../prisma/prisma.service");
const common_1 = require("@nestjs/common");
let PrismaMedicalHistoryRepositoy = class PrismaMedicalHistoryRepositoy {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(medicalHistoryInput) {
        const medicalHistory = await this.prisma.medicalHistory.create({
            data: {
                AppointmentId: medicalHistoryInput.appointmentId,
            },
        });
        return medicalHistory;
    }
    async findById(id) {
        const medicalHistory = await this.prisma.medicalHistory.findUnique({
            where: { id: id },
        });
        return medicalHistory;
    }
    async remove({ id }) {
        await this.prisma.medicalHistory.delete({ where: { id: id } });
    }
    async getMedicalHistoryByPatientId(patientId) {
        const medicalHistoryData = await this.prisma.medicalHistory.findMany({
            where: {
                Appointment: {
                    patientId: patientId,
                },
            },
            select: {
                id: true,
                AppointmentId: true,
                Appointment: {
                    select: {
                        Doctor: {
                            select: {
                                user: true,
                            },
                        },
                        id: true,
                        patientId: true,
                        institutionId: true,
                        consultationTypeId: true,
                        doctorId: true,
                        symptomDescription: true,
                        isUrgent: true,
                        date: true,
                        status: true,
                        createdAt: true,
                        updatedAt: true,
                        deletedAt: true,
                    },
                },
            },
        });
        const medicalHistory = medicalHistoryData.map((history) => {
            return {
                id: history.id,
                doctor: history.Appointment.Doctor.user,
                appointmentId: history.AppointmentId,
                appointment: {
                    id: history.Appointment.id,
                    patientId: history.Appointment.patientId,
                    institutionId: history.Appointment.institutionId,
                    consultationTypeId: history.Appointment.consultationTypeId,
                    doctorId: history.Appointment.doctorId,
                    symptomDescription: history.Appointment.symptomDescription,
                    isUrgent: history.Appointment.isUrgent,
                    date: history.Appointment.date,
                    status: history.Appointment.status,
                    createdAt: history.Appointment.createdAt,
                    updatedAt: history.Appointment.updatedAt,
                    deletedAt: history.Appointment.deletedAt,
                },
            };
        });
        return medicalHistory;
    }
    async getMedicalHistoriesByDoctorId(doctorId) {
        const medicalHistory = await this.prisma.medicalHistory.findMany({
            where: {
                Appointment: {
                    doctorId: doctorId,
                },
            },
            include: {
                Appointment: true,
            },
        });
        return medicalHistory;
    }
    async getMedicalHistoriesByAppointmentId(appointmentId) {
        const medicalHistory = await this.prisma.medicalHistory.findMany({
            where: {
                Appointment: {
                    id: appointmentId,
                },
            },
        });
        return medicalHistory;
    }
};
exports.PrismaMedicalHistoryRepositoy = PrismaMedicalHistoryRepositoy;
exports.PrismaMedicalHistoryRepositoy = PrismaMedicalHistoryRepositoy = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PrismaMedicalHistoryRepositoy);
//# sourceMappingURL=prismaMedicalHistoryRepository.js.map