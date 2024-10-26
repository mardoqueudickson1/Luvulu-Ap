import { messages } from 'src/utils/shared/errorsMessages';
import { IDoctorRepository } from '../../repository/interface/IDoctorRepository';
import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class GetScheduleDoctorByIdService {
  constructor(private readonly doctortRepo: IDoctorRepository) {}

  async execute(id: string): Promise<any> {
    const result = await this.doctortRepo.getScheduleByDoctorId(id);

    if (!result) {
      throw new NotFoundException(messages.doctorNotFound);
    }
    return result;
  }
}
