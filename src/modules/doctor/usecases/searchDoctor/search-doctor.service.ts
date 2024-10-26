import { toUpperCase } from 'src/utils/utils';
import { IDoctorRepository } from '../../repository/interface/IDoctorRepository';
import { Injectable } from '@nestjs/common';
import { calculateDoctorRating } from 'src/modules/doctorRating/usecases/list-all -top-rated/list-all-top-rated.service';
import { TopResponseAllDoctor } from 'src/modules/doctorRating/dtos/topRatedDoctors';
import { findSupabaseFileService } from 'src/utils/shared/providers/storageProviders/implementations/supaBase/findPhotoFile';

@Injectable()
export class SearchDoctorService {
  constructor(private readonly doctorRepo: IDoctorRepository) {}

  async searchDoctor(
    name: string,
    page: number,
  ): Promise<TopResponseAllDoctor[]> {
    const nameUpperCase = toUpperCase(name);
    const doctors = await this.doctorRepo.SearchDoctor(nameUpperCase, page);
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
