import { BadRequestException, Injectable } from '@nestjs/common';
import { UpdateDoctorInput } from '../../dtos/update-doctor.input';
import { IDoctorRepository } from '../../repository/interface/IDoctorRepository';
import { Doctors } from '../../entities/doctor.entity';
import { messages } from 'src/utils/shared/errorsMessages';

@Injectable()
export class UpdateDoctorService {
  constructor(private readonly repo: IDoctorRepository) {}

  async update(data: UpdateDoctorInput): Promise<Doctors> {
    // const findDoctor = await this.repo.findById(data.id);

    const doctor = await this.repo.update(data);
    return doctor;
  }

  async getDoctorId(userId: string) {
    const doctorId = await this.repo.findUser(userId);
    return doctorId;
  }
}
