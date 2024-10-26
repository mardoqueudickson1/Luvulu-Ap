import { toUpperCase } from 'src/utils/utils';
import { DoctorFilterOptions } from '../../dtos/doctor-filter-option';
import { IDoctorRepository } from '../../repository/interface/IDoctorRepository';
import { Injectable } from '@nestjs/common';
import { calculateDoctorRating } from 'src/modules/doctorRating/usecases/list-all -top-rated/list-all-top-rated.service';
import { TopResponseAllDoctor } from 'src/modules/doctorRating/dtos/topRatedDoctors';
import { findSupabaseFileService } from 'src/utils/shared/providers/storageProviders/implementations/supaBase/findPhotoFile';

@Injectable()
export class FilterDoctorService {
  constructor(private readonly doctorRepo: IDoctorRepository) {}

  async filterDoctor(
    data: DoctorFilterOptions,
  ): Promise<TopResponseAllDoctor[]> {
    for (const key in data) {
      const formattedValue =
        typeof data[key] === 'string'
          ? toUpperCase(data[key] as string)
          : data[key];
      data[key] = formattedValue;
    }

    const doctors = await this.doctorRepo.DoctorFilter(data);
    const result = calculateDoctorRating(doctors);

    for (const data of result) {
      if (data.user.avatar !== null) {
        const url = await findSupabaseFileService.getPhotoUrl(data.user.avatar);
        data.user.avatar = url.toString();
      }
    }

    return result;
  }
}
