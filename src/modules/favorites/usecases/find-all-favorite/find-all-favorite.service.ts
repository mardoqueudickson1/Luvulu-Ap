import { Injectable } from '@nestjs/common';
import { IFavoriteRepository } from '../../repository/interface/IFavoriteRepository';
import { findSupabaseFileService } from 'src/utils/shared/providers/storageProviders/implementations/supaBase/findPhotoFile';

@Injectable()
export class FindAllFavoriteService {
  constructor(private repo: IFavoriteRepository) {}

  async findAll(id: string) {
    try {
      const { pacient } = await this.repo.findUser(id);
      const result = await this.repo.findAll(pacient.id);

      for (const favorite of result) {
        for (const doctor of favorite.doctors) {
          if (doctor.avatar !== null) {
            const url = await findSupabaseFileService.getPhotoUrl(
              doctor.avatar,
            );
            doctor.avatar = url.toString();
            console.log(doctor.avatar);
          }
        }

        for (const institution of favorite.institutions) {
          if (institution.avatar !== null) {
            const url = await findSupabaseFileService.getPhotoUrl(
              institution.avatar,
            );
            institution.avatar = url.toString();
          }
        }
      }
      return result;
    } catch (error) {
      console.log(error);
    }
  }
}
