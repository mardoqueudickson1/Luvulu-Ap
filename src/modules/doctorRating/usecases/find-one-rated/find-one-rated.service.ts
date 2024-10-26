import { Injectable } from '@nestjs/common';
import { IRatingRepository } from '../../repository/interface/IDoctorRatingRepository';
import { TopResponseAllDoctor } from '../../dtos/topRatedDoctors';
import { findSupabaseFileService } from 'src/utils/shared/providers/storageProviders/implementations/supaBase/findPhotoFile';

@Injectable()
export class FindOneRatedService {
  constructor(private readonly repo: IRatingRepository) {}

  async findOne(id: string): Promise<TopResponseAllDoctor> {
    const data = await this.repo.findOneDoctorWithRate(id);

    if (data.user.avatar !== null) {
      const url = await findSupabaseFileService.getPhotoUrl(data.user.avatar);
      data.user.avatar = url.toString();
    }

    const result = calculateOneDoctorRatings(data);
    return result;
  }
}

export function calculateOneDoctorRatings(
  doctor: TopResponseAllDoctor,
): TopResponseAllDoctor {
  const totalRating = doctor.rating.reduce(
    (total, rating) => total + rating.rate,
    0,
  );

  let averageRating = totalRating / doctor.rating.length;
  if (averageRating === undefined || isNaN(averageRating)) {
    averageRating = 0;
  }

  const response: TopResponseAllDoctor = {
    pacientCared: doctor.pacientCared,
    isFavorited: doctor.isFavorited,
    specialty: doctor.specialty,
    bio: doctor.bio,
    registrationNumber: doctor.registrationNumber,
    user: doctor.user,
    rating: doctor.rating,
    institutions: doctor.institutions,
    totalRating: totalRating,
    averageRating:
      averageRating % 1 === 0
        ? averageRating.toFixed(1)
        : parseFloat(averageRating.toFixed(1)),
  };

  return response;
}
