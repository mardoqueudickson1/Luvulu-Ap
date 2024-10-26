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
exports.PrismaNotificationsRepositoy = void 0;
const prisma_service_1 = require("../../../prisma/prisma.service");
const common_1 = require("@nestjs/common");
let PrismaNotificationsRepositoy = class PrismaNotificationsRepositoy {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(notificationInput) {
        const notification = await this.prisma.notification.create({
            data: notificationInput,
        });
        return notification;
    }
    async findById(id) {
        const notification = await this.prisma.notification.findUnique({
            where: { id: id },
        });
        return notification;
    }
    async remove({ id }) {
        await this.prisma.notification.delete({ where: { id: id } });
    }
    async findClinicByUserId(id) {
        const user = await this.prisma.user.findUnique({
            where: {
                id: id,
            },
            select: {
                id: true,
                Institution: {
                    select: {
                        id: true,
                    },
                },
            },
        });
        const result = {
            institution: user.Institution[0],
        };
        return result;
    }
    async findDoctorUserId(id) {
        const user = await this.prisma.user.findUnique({
            where: {
                id: id,
            },
            select: {
                id: true,
                Doctor: {
                    select: {
                        id: true,
                    },
                },
            },
        });
        const result = {
            doctor: user.Doctor[0],
        };
        return result;
    }
    async findPatientByUserId(id) {
        const user = await this.prisma.user.findUnique({
            where: {
                id: id,
            },
            select: {
                id: true,
                Patient: {
                    select: {
                        id: true,
                    },
                },
            },
        });
        const result = {
            patientId: user.Patient[0],
        };
        return result;
    }
    async update(id, notification) {
        return await this.prisma.notification.update({
            where: { id: id },
            data: notification,
        });
    }
    async findAllNotificationPatientId(patientId) {
        const notifications = await this.prisma.notification.findMany({
            where: { patient_id: patientId },
            select: {
                id: true,
                content: true,
                appointmentId: true,
                institution_id: true,
                read: true,
                createdAt: true,
                type: true,
                Institution: {
                    select: {
                        user: true,
                    },
                },
            },
        });
        const result = notifications.map((e) => ({
            id: e.id,
            name: e.Institution.user.name,
            content: e.content,
            appointmentId: e.appointmentId,
            read: e.read,
            institution_id: e.institution_id,
            type: e.type,
            avatar: e.Institution.user.avatar,
            createdAt: e.createdAt,
        }));
        return result;
    }
    async findAllNotificationDoctorId(doctorId) {
        const notifications = await this.prisma.notification.findMany({
            where: { doctor_id: doctorId },
            select: {
                id: true,
                content: true,
                appointmentId: true,
                institution_id: true,
                patient_id: true,
                Appointment: {
                    select: {
                        institution: {
                            select: {
                                user: true,
                            },
                        },
                    },
                },
                read: true,
                createdAt: true,
                type: true,
                Institution: {
                    select: {
                        user: true,
                    },
                },
            },
        });
        const result = notifications.map((e) => ({
            id: e.id,
            name: e.Appointment.institution.user.name,
            content: e.content,
            appointmentId: e.appointmentId,
            read: e.read,
            patient_id: e.patient_id,
            institution_id: e.institution_id,
            type: e.type,
            avatar: e.Appointment.institution.user.avatar,
            createdAt: e.createdAt,
        }));
        return result;
    }
    async findAllNotificationClinicId(clinicId) {
        const notifications = await this.prisma.notification.findMany({
            where: { institution_id: clinicId },
            select: {
                id: true,
                content: true,
                appointmentId: true,
                institution_id: true,
                Appointment: {
                    select: {
                        pacient: {
                            select: {
                                user: true,
                            },
                        },
                    },
                },
                read: true,
                createdAt: true,
                type: true,
                Patient: {
                    select: {
                        user: true,
                    },
                },
            },
        });
        const result = notifications.map((e) => ({
            id: e.id,
            name: e.Appointment.pacient.user.name,
            content: e.content,
            appointmentId: e.appointmentId,
            read: e.read,
            institution_id: e.institution_id,
            type: e.type,
            avatar: e.Appointment.pacient.user.avatar,
            createdAt: e.createdAt,
        }));
        return result;
    }
};
exports.PrismaNotificationsRepositoy = PrismaNotificationsRepositoy;
exports.PrismaNotificationsRepositoy = PrismaNotificationsRepositoy = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PrismaNotificationsRepositoy);
//# sourceMappingURL=prismaNotificationRepository.js.map