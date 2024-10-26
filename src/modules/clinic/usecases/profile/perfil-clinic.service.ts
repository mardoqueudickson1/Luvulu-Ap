import { messages } from '../../../../utils/shared/errorsMessages';
import { Injectable, NotFoundException } from '@nestjs/common';
import { ProfileClinicOutput } from '../../dtos/profile-clinic.output';
import { IClinicRepository } from '../../repository/interface/IClinicRepository';
import { findSupabaseFileService } from 'src/utils/shared/providers/storageProviders/implementations/supaBase/findPhotoFile';

@Injectable()
export class ProfileClinicService {
  constructor(private readonly clinicRepo: IClinicRepository) {}

  async profile(id: string): Promise<ProfileClinicOutput> {
    try {
      const clinic = await this.clinicRepo.profile(id);

      if (!clinic) {
        throw new NotFoundException(messages.clinicNotFound);
      }

      if (clinic.user.avatar !== null) {
        const url = await findSupabaseFileService.getPhotoUrl(
          clinic.user.avatar,
        );
        clinic.user.avatar = url.toString();
      }

      return clinic;
    } catch (error) {
      throw error;
    }
  }
}
