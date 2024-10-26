import { calculateClinicRatings } from 'src/modules/clinicRating/usecases/list-all -top-rated/list-all-top-rated.service';
import { FilterOptions } from '../../dtos/clinic-filter-option';
import { NearByclinicResponse } from '../../dtos/findAll-clinic.output';
import { IClinicRepository } from '../../repository/interface/IClinicRepository';
import { Injectable } from '@nestjs/common';
import { findSupabaseFileService } from 'src/utils/shared/providers/storageProviders/implementations/supaBase/findPhotoFile';

@Injectable()
export class FilterClinicService {
  constructor(private readonly clinicRepo: IClinicRepository) {}

  async filterClinic(
    filterOptions: FilterOptions,
  ): Promise<NearByclinicResponse[]> {
    const service = filterOptions.service.toLocaleUpperCase();
    const municipalityUpperCase = filterOptions.municipality.toUpperCase();
    const cityUpperCase = filterOptions.city.toUpperCase();
    const neigbhodUpperCase = filterOptions.neighbor.toUpperCase();

    filterOptions.service = service;
    filterOptions.municipality = municipalityUpperCase;
    filterOptions.city = cityUpperCase;
    filterOptions.neighbor = neigbhodUpperCase;

    const clinic = await this.clinicRepo.clinicFilter(filterOptions);
    const result = calculateClinicRatings(clinic);
    for (const data of result) {
      if (data.user.avatar !== null) {
        const url = await findSupabaseFileService.getPhotoUrl(data.user.avatar);
        data.user.avatar = url.toString();
      }
    }
    return result;
  }
}
