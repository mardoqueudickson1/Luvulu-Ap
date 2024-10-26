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
exports.PrismaWeeklyScheduleRepository = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../../prisma/prisma.service");
const date_fns_1 = require("date-fns");
let PrismaWeeklyScheduleRepository = class PrismaWeeklyScheduleRepository {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(input) {
        return this.prisma.weeklySchedule.create({
            data: input,
        });
    }
    async update(id, data) {
        return this.prisma.weeklySchedule.update({
            where: { id: id },
            data: data,
        });
    }
    async findById(id) {
        return await this.prisma.weeklySchedule.findMany({
            where: { doctorId: id },
        });
    }
    async findByClinicId(id, doctorId) {
        return await this.prisma.weeklySchedule.findMany({
            where: {
                institutionId: id,
                doctorId: doctorId,
            },
        });
    }
    async remove({ id }) {
        await this.prisma.weeklySchedule.delete({ where: { id: id } });
    }
    async findAll() {
        return await this.prisma.weeklySchedule.findMany();
    }
    async findByDaysOfWeek(day) {
        const days = await this.prisma.weeklySchedule.findFirst({
            where: { dayOfWeek: day },
        });
        return days;
    }
    async findDoctorByUserId(id) {
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
    async getScheduleByDoctorId(doctorId) {
        const doctor = await this.prisma.doctor.findUnique({
            where: { id: doctorId },
            include: {
                WeeklySchedule: {
                    orderBy: { dayOfWeek: 'asc' },
                },
                institution: {
                    select: {
                        id: true,
                        institution: {
                            select: {
                                id: true,
                                user: {
                                    select: {
                                        id: true,
                                        name: true,
                                    },
                                },
                            },
                        },
                    },
                },
                user: {
                    select: {
                        id: true,
                        name: true,
                        nationality: true,
                    },
                },
            },
        });
        const schedule = doctor.WeeklySchedule[0];
        const dayOfWeek = schedule.dayOfWeek.getDay();
        const { startTime, endTime, interval } = schedule;
        const horarios = [];
        let horarioAtual = new Date(startTime);
        const horarioFim = new Date(endTime);
        const horarioInicioComercial = new Date(startTime);
        horarioInicioComercial.setHours(8, 0, 0, 0);
        if (horarioAtual < horarioInicioComercial) {
            horarioAtual = horarioInicioComercial;
        }
        while (horarioAtual < horarioFim) {
            const horarioFormatado = (0, date_fns_1.format)(horarioAtual, 'HH:mm');
            horarios.push(horarioFormatado);
            horarioAtual = (0, date_fns_1.addMinutes)(horarioAtual, interval);
        }
        const doctorSchedule = {
            dayOfWeek,
            doctor: {
                id: doctor.id,
                bio: doctor.bio,
                user: {
                    id: doctor.user.id,
                    name: doctor.user.name,
                },
            },
            institution: {
                id: doctor.institution[0].id,
                user: {
                    id: doctor.institution[0].institution.id,
                    name: doctor.institution[0].institution.user.name,
                },
            },
            hours: horarios,
        };
        return doctorSchedule;
    }
};
exports.PrismaWeeklyScheduleRepository = PrismaWeeklyScheduleRepository;
exports.PrismaWeeklyScheduleRepository = PrismaWeeklyScheduleRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PrismaWeeklyScheduleRepository);
//# sourceMappingURL=prisma-WorkCalendarRepository.js.map