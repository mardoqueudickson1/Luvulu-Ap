import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { TopResponseAllClinic } from '../../dtos/topRatedClinic';
import { IClinicRatingRepository } from '../../repository/interface/IClinicRatingRepository';
import { messages } from 'src/utils/shared/errorsMessages';
import { findSupabaseFileService } from 'src/utils/shared/providers/storageProviders/implementations/supaBase/findPhotoFile';

@Injectable()
export class FindOneClinicRatedService {
  constructor(private readonly repo: IClinicRatingRepository) {}

  async findOne(id: string): Promise<TopResponseAllClinic> {
    try {
      const data = await this.repo.findOneClinicWithRate(id);

      if (data.user.avatar !== null) {
        const url = await findSupabaseFileService.getPhotoUrl(data.user.avatar);
        data.user.avatar = url.toString();
      }

      const result = calculateOneRatedClinic(data);

      return result;
    } catch (error) {
      console.log(error);
    }
  }
}

export function calculateOneRatedClinic(
  clinic: TopResponseAllClinic,
): TopResponseAllClinic {
  try {
    const countRatings = clinic.doctorRated.length;
    const totalRating = clinic.doctorRated.reduce(
      (total, rating) => total + rating,
      0,
    );

    let averageRating = totalRating / clinic.doctorRated.length;
    if (averageRating === undefined || isNaN(averageRating)) {
      averageRating = 0;
    }

    const response: TopResponseAllClinic = {
      isFavorited: clinic.isFavorited,
      pacientsCared: clinic.pacientsCared,
      user: clinic.user,
      services: clinic.services || [],
      totalRating: countRatings,
      averageRating:
        averageRating % 1 === 0
          ? averageRating.toFixed(1)
          : parseFloat(averageRating.toFixed(1)),
    };

    return response;
  } catch (error) {
    throw new InternalServerErrorException(messages.errorServer);
  }
}
