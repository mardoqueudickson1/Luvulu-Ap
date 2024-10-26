import { BadRequestException, Injectable } from '@nestjs/common';
import { WeeklySchedules } from '../../entities/Weekly-schedule-entity';
import { IWeeklyScheduleRepository } from '../../repository/interface/IWeeklyScheduleRepository';
import { WeeklyScheduleDTO } from '../../dtos/create-Weekly-schedule-input';
// import { validateDateRange } from 'src/utils/shared/validateDate';
import { messages } from 'src/utils/shared/errorsMessages';
import { isBefore } from 'date-fns';

@Injectable()
export class CreateWeeklyScheduleService {
  constructor(private weekRepo: IWeeklyScheduleRepository) {}

  async create(data: WeeklyScheduleDTO): Promise<WeeklySchedules> {
    const alredyExist = await this.weekRepo.findByDaysOfWeek(data.dayOfWeek);

    if (alredyExist) {
      throw new BadRequestException(messages.weekScheduleFound);
    }
    const { startTime, endTime } = data;

    // validateDateRange(startTime, endTime);

    if (isBefore(startTime, Date.now())) {
      throw new BadRequestException(
        'Você não pode criar um compromisso em uma data anterior',
      );
    }

    if (isBefore(endTime, Date.now())) {
      throw new BadRequestException(
        'Você não pode criar um compromisso em uma data anterior',
      );
    }

    const { doctor } = await this.weekRepo.findDoctorByUserId(data.doctorId);

    const weekSchedule = await this.weekRepo.create({
      dayOfWeek: data.dayOfWeek,
      startTime: startTime,
      endTime: endTime,
      institutionId: data.institutionId,
      interval: data.interval,
      doctorId: doctor.id,
      dailyWorkingHours: data.dailyWorkingHours,
    });
    return weekSchedule;
  }
}
