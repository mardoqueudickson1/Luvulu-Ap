import { PrismaService } from 'src/modules/prisma/prisma.service';
import { IWeeklyScheduleRepository } from '../interface/IWeeklyScheduleRepository';
import { ScheduleType } from '../../dtos/create-Weekly-schedule-input';
import { WeeklySchedules } from '../../entities/Weekly-schedule-entity';
import { UpdateWeeklySchedule } from '../../dtos/updateWeekly-schedule';
import { DoctorType } from '../../dtos/doctor.type';
import { DoctorScheduleOutput } from '../../dtos/doctor-schedule-output';
export declare class PrismaWeeklyScheduleRepository implements IWeeklyScheduleRepository {
    private prisma;
    constructor(prisma: PrismaService);
    create(input: ScheduleType): Promise<ScheduleType>;
    update(id: string, data: UpdateWeeklySchedule): Promise<WeeklySchedules>;
    findById(id: string): Promise<WeeklySchedules[]>;
    findByClinicId(id: string, doctorId: string): Promise<WeeklySchedules[]>;
    remove({ id }: {
        id: string;
    }): Promise<void>;
    findAll(): Promise<WeeklySchedules[]>;
    findByDaysOfWeek(day: Date): Promise<WeeklySchedules>;
    findDoctorByUserId(id: string): Promise<DoctorType>;
    getScheduleByDoctorId(doctorId: string): Promise<DoctorScheduleOutput>;
}
