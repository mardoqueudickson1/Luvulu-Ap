import { Injectable } from '@nestjs/common';
import { UpdateClinicInput } from '../../dtos/update-clinic.input';
import { Clinics } from '../../entities/clinic';
import { IClinicRepository } from '../../repository/interface/IClinicRepository';

@Injectable()
export class UpdateClinicService {
  constructor(private readonly repo: IClinicRepository) {}

  async update(data: UpdateClinicInput): Promise<Clinics> {
    const clinic = await this.repo.update(data);
    return clinic;
  }

  async getClinicID(clinicId: string) {
    const clinic = await this.repo.findUserClinicId(clinicId);
    return clinic;
  }
}
