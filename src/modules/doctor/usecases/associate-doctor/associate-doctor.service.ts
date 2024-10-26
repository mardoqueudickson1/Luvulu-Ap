import { Injectable, NotFoundException } from '@nestjs/common';
import { IDoctorRepository } from '../../repository/interface/IDoctorRepository';
import {
  AssociateDoctorInput,
  AssociateDoctorResponse,
} from '../../dtos/doctorInstitution';
import { messages } from 'src/utils/shared/errorsMessages';

@Injectable()
export class AssociateDoctorService {
  constructor(private repo: IDoctorRepository) {}

  async associateDoctor(
    data: AssociateDoctorInput,
  ): Promise<AssociateDoctorResponse> {
    const { Institution } = await this.repo.findUser(data.institutionId);
    data.institutionId = Institution.id;

    const isAlreadyAssociated = await this.repo.isDoctorAssociatedWithClinic(
      data.doctorId,
      data.institutionId,
    );

    if (isAlreadyAssociated) {
      throw new NotFoundException(messages.doctorAlreadyAssociate);
    }

    return await this.repo.associateDoctor(data);
  }
}
