import { InstitutionIResponse } from '../../dtos/response-all-doctor';
import { IDoctorRepository } from '../../repository/interface/IDoctorRepository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class listClinicOfDoctorService {
  constructor(private readonly doctorRepo: IDoctorRepository) {}

  async listClinicOfDoctor(id: string): Promise<InstitutionIResponse[]> {
    return await this.doctorRepo.findClinicOFDoctor(id);
  }
}
