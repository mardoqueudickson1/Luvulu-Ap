import { messages } from '../../../../utils/shared/errorsMessages';
import { Injectable, NotFoundException } from '@nestjs/common';
import { IDoctorRepository } from '../../repository/interface/IDoctorRepository';
import { ResponseProfileDoctor } from '../../dtos/profile-doctor';
import { findSupabaseFileService } from 'src/utils/shared/providers/storageProviders/implementations/supaBase/findPhotoFile';

@Injectable()
export class ProfileDoctorService {
  constructor(private readonly doctor: IDoctorRepository) {}

  async profile(id: string): Promise<ResponseProfileDoctor> {
    try {
      const doctor = await this.doctor.profile(id);

      if (doctor.user.avatar !== null) {
        const url = await findSupabaseFileService.getPhotoUrl(
          doctor.user.avatar,
        );
        doctor.user.avatar = url.toString();
      }
      if (!doctor) {
        throw new NotFoundException(messages.doctorNotFound);
      }
      return doctor;
    } catch (error) {
      throw error;
    }
  }
}
