import { findSupabaseFileService } from 'src/utils/shared/providers/storageProviders/implementations/supaBase/findPhotoFile';
import { ResponseAllDoctor } from '../../dtos/response-all-doctor';
import { IDoctorRepository } from '../../repository/interface/IDoctorRepository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ListAllDoctorService {
  constructor(private readonly doctorRepo: IDoctorRepository) {}

  async listAll(): Promise<ResponseAllDoctor[]> {
    const doctor = await this.doctorRepo.findAll();

    for (const data of doctor) {
      if (data.user.avatar !== null) {
        const url = await findSupabaseFileService.getPhotoUrl(data.user.avatar);
        data.user.avatar = url.toString();
      }
    }
    return doctor;
  }
}
