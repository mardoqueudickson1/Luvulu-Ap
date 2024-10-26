import { Injectable } from '@nestjs/common';

import { PrismaService } from 'src/modules/prisma/prisma.service';
import { IWeeklyScheduleRepository } from '../interface/IWeeklyScheduleRepository';
import { WeeklyScheduleDTO } from '../../dtos/create-Weekly-schedule-input';
import { WeeklySchedules } from '../../entities/Weekly-schedule-entity';
import { UpdateWeeklySchedule } from '../../dtos/updateWeekly-schedule';
import { DoctorType } from '../../dtos/doctor.type';
import { DoctorScheduleOutput } from '../../dtos/doctor-schedule-output';
import { addMinutes, format } from 'date-fns';

@Injectable()
export class PrismaWeeklyScheduleRepository
  implements IWeeklyScheduleRepository
{
  constructor(private prisma: PrismaService) {}

  async create(input: WeeklyScheduleDTO): Promise<WeeklySchedules> {
    return this.prisma.weeklySchedule.create({
      data: input,
    });
  }

  async update(
    id: string,
    data: UpdateWeeklySchedule,
  ): Promise<WeeklySchedules> {
    return this.prisma.weeklySchedule.update({
      where: { id: id },
      data: data,
    });
  }

  async findById(id: string): Promise<WeeklySchedules[]> {
    return await this.prisma.weeklySchedule.findMany({
      where: { doctorId: id },
    });
  }

  async findByClinicId(id: string): Promise<WeeklySchedules[]> {
    return await this.prisma.weeklySchedule.findMany({
      where: { institutionId: id },
    });
  }

  async remove({ id }: { id: string }): Promise<void> {
    await this.prisma.weeklySchedule.delete({ where: { id: id } });
  }

  async findAll(): Promise<WeeklySchedules[]> {
    return await this.prisma.weeklySchedule.findMany();
  }

  async findByDaysOfWeek(day: Date): Promise<WeeklySchedules> {
    const days = await this.prisma.weeklySchedule.findFirst({
      where: { dayOfWeek: day },
    });

    return days;
  }

  async findDoctorByUserId(id: string): Promise<DoctorType> {
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

    const result: DoctorType = {
      doctor: user.Doctor[0],
    };
    return result;
  }

  async getScheduleByDoctorId(doctorId: string): Promise<DoctorScheduleOutput> {
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
      const horarioFormatado = format(horarioAtual, 'HH:mm');
      horarios.push(horarioFormatado);
      horarioAtual = addMinutes(horarioAtual, interval);
    }

    const doctorSchedule: any = {
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
}
