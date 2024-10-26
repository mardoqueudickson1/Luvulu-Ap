import { findSupabaseFileService } from 'src/utils/shared/providers/storageProviders/implementations/supaBase/findPhotoFile';
import { ResponseClinic } from '../../dtos/clinicReponse';
import { IClinicRepository } from '../../repository/interface/IClinicRepository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class FindOneClinicService {
  constructor(private readonly clinicRepo: IClinicRepository) {}

  async findOne(id: string): Promise<ResponseClinic> {
    const clinic = await this.clinicRepo.findById(id);

    if (clinic.user.avatar !== null) {
      const url = await findSupabaseFileService.getPhotoUrl(clinic.user.avatar);
      clinic.user.avatar = url.toString();
    }

    return clinic;
  }
}
