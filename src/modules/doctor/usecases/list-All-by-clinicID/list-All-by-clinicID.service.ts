import { findSupabaseFileService } from 'src/utils/shared/providers/storageProviders/implementations/supaBase/findPhotoFile';
import { ResponseAllDoctor } from '../../dtos/response-all-doctor';
import { IDoctorRepository } from '../../repository/interface/IDoctorRepository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ListAllDoctorByclinicIDService {
  constructor(private readonly doctorRepo: IDoctorRepository) {}

  async listAllByClinicID(clinicId: string): Promise<ResponseAllDoctor[]> {
    const { Institution } = await this.doctorRepo.findUser(clinicId);

    const result = await this.doctorRepo.findDoctorByClinicId(Institution.id);

    for (const data of result) {
      if (data.user.avatar !== null) {
        const url = await findSupabaseFileService.getPhotoUrl(data.user.avatar);
        data.user.avatar = url.toString();
      }
    }

    return result;
  }
}
