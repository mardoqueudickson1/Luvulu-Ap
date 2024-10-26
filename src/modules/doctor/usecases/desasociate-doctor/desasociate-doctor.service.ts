import { Injectable } from '@nestjs/common';
import { IDoctorRepository } from '../../repository/interface/IDoctorRepository';
import { AssociateDoctorInput } from '../../dtos/doctorInstitution';

@Injectable()
export class DesasociateDoctorService {
  constructor(private repo: IDoctorRepository) {}

  async desasociateDoctor(
    data: AssociateDoctorInput,
  ): Promise<{ message: string }> {
    const { Institution } = await this.repo.findUser(data.institutionId);
    data.institutionId = Institution.id;

    return await this.repo.desasociateDoctor(data);
  }
}
