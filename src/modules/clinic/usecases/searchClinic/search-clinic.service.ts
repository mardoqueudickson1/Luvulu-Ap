import { calculateClinicRatings } from 'src/modules/clinicRating/usecases/list-all -top-rated/list-all-top-rated.service';
import { NearByclinicResponse } from '../../dtos/findAll-clinic.output';
import { IClinicRepository } from '../../repository/interface/IClinicRepository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class SearchClinicService {
  constructor(private readonly clinicRepo: IClinicRepository) {}

  async Search(name: string, page: number): Promise<NearByclinicResponse[]> {
    const Uppername = name.toLocaleUpperCase();

    const clinic = await this.clinicRepo.SearchForClinic(Uppername, page);
    const result = calculateClinicRatings(clinic);

    return result;
  }
}
