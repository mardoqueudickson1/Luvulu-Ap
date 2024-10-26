import { messages } from 'src/utils/shared/errorsMessages';
import { ResponsePatientOutput } from '../../dtos/reponsePatientOutput';
import { IPatientRepository } from '../../repository/interface/IPatientRepository';
import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class FindOnePatientService {
  constructor(private readonly patitientRepo: IPatientRepository) {}

  async findOne(id: string): Promise<ResponsePatientOutput> {
    const patitient = await this.patitientRepo.findById(id);

    if (!patitient) {
      throw new NotFoundException(messages.doctorNotFound);
    }
    return patitient;
  }
}
