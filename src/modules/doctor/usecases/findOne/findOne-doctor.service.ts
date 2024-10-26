import { messages } from 'src/utils/shared/errorsMessages';
import { ResponseDoctor } from '../../dtos/response-doctor';
import { IDoctorRepository } from '../../repository/interface/IDoctorRepository';
import { Injectable, NotFoundException } from '@nestjs/common';
import { findSupabaseFileService } from 'src/utils/shared/providers/storageProviders/implementations/supaBase/findPhotoFile';

@Injectable()
export class FindOneDoctorService {
  constructor(private readonly doctortRepo: IDoctorRepository) {}

  async findOne(id: string): Promise<ResponseDoctor> {
    const result = await this.doctortRepo.findById(id);

    if (result.user.avatar !== null) {
      const url = await findSupabaseFileService.getPhotoUrl(result.user.avatar);
      result.user.avatar = url.toString();
    }

    if (!result) {
      throw new NotFoundException(messages.doctorNotFound);
    }
    return result;
  }
}
