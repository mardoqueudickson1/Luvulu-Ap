import { WeeklyScheduleDTO } from '../../dtos/create-Weekly-schedule-input';
import { DoctorScheduleOutput } from '../../dtos/doctor-schedule-output';
import { DoctorType } from '../../dtos/doctor.type';
import { UpdateWeeklySchedule } from '../../dtos/updateWeekly-schedule';
import { WeeklySchedules } from '../../entities/Weekly-schedule-entity';

export abstract class IWeeklyScheduleRepository {
  abstract create(data: WeeklyScheduleDTO): Promise<WeeklySchedules>;
  abstract findById(id: string): Promise<WeeklySchedules[]>;
  abstract update(
    id: string,
    data: UpdateWeeklySchedule,
  ): Promise<WeeklySchedules>;
  abstract remove({ id }: { id: string }): Promise<void>;
  abstract findAll(): Promise<WeeklySchedules[]>;
  abstract findByDaysOfWeek(day: Date): Promise<WeeklySchedules>;
  abstract findDoctorByUserId(id: string): Promise<DoctorType>;
  abstract getScheduleByDoctorId(
    doctorId: string,
  ): Promise<DoctorScheduleOutput>;

  abstract findByClinicId(id: string): Promise<WeeklySchedules[]>;
}
