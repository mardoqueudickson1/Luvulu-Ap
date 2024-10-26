import { findSupabaseFileService } from 'src/utils/shared/providers/storageProviders/implementations/supaBase/findPhotoFile';
import { ClinicOutput } from '../../dtos/findAll-clinic.output';
import { IClinicRepository } from '../../repository/interface/IClinicRepository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ListAllClinicService {
  constructor(private readonly clinicRepo: IClinicRepository) {}

  async listAll(): Promise<ClinicOutput[]> {
    const clinic = await this.clinicRepo.findAll();

    for (const data of clinic) {
      if (data.user.avatar !== null) {
        const url = await findSupabaseFileService.getPhotoUrl(data.user.avatar);
        data.user.avatar = url.toString();
      }
    }
    return clinic;
  }
}
