import { FindAllPatientResponse } from '../../dtos/findAllPatientReponse';
import { IPatientRepository } from '../../repository/interface/IPatientRepository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ListAllPatientService {
  constructor(private readonly patitientRepo: IPatientRepository) {}

  async listAll(): Promise<FindAllPatientResponse[]> {
    const patitient = await this.patitientRepo.findAll();
    return patitient;
  }
}
