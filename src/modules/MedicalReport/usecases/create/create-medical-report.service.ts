import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateMedicalReport } from '../../dtos/create-medical-report.input';
import { IMedicalReportRepository } from '../../repository/interface/IMediclaReportRepository';
import { messages } from 'src/utils/shared/errorsMessages';

@Injectable()
export class CreateMedicalReportService {
  constructor(private repo: IMedicalReportRepository) {}

  async create(data: CreateMedicalReport) {
    try {
      const { doctor } = await this.repo.findUser(data.doctorId);
      data.doctorId = doctor.id;
      const alreadyExist = await this.repo.alreadyExist(data.AppointmentId);
      if (alreadyExist) {
        throw new BadRequestException(messages.reportFound);
      }
      return await this.repo.create(data);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
