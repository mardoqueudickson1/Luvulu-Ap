import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { TopResponseAllClinic } from '../../dtos/topRatedClinic';
import { IClinicRatingRepository } from '../../repository/interface/IClinicRatingRepository';
import { messages } from 'src/utils/shared/errorsMessages';
import { findSupabaseFileService } from 'src/utils/shared/providers/storageProviders/implementations/supaBase/findPhotoFile';

@Injectable()
export class ListAllTopClinicRatingService {
  constructor(private readonly repo: IClinicRatingRepository) {}

  async findAllTopRated(): Promise<TopResponseAllClinic[]> {
    const topRatedDoctors = await this.repo.findTopRatedClinic();
    const result = calculateClinicRatings(topRatedDoctors);

    for (const clinic of result) {
      if (clinic.user.avatar !== null) {
        const url = await findSupabaseFileService.getPhotoUrl(
          clinic.user.avatar,
        );
        clinic.user.avatar = url.toString();
      }
    }

    return result;
  }
}

export function calculateClinicRatings(
  clinics: TopResponseAllClinic[],
): TopResponseAllClinic[] {
  try {
    let rateCounts = 0;
    let totalRating = 0;
    let averageRating = 0;

    const topRatedClinics = clinics.map((clinic) => {
      if (clinic.doctorRated) {
        rateCounts = clinic.doctorRated.length;

        totalRating = clinic.doctorRated.reduce(
          (total, rating) => total + rating,
          0,
        );

        averageRating = totalRating / clinic.doctorRated.length;

        if (averageRating === undefined || isNaN(averageRating)) {
          averageRating = 0;
        }
      }

      return { ...clinic, totalRating, rateCounts, averageRating };
    });

    topRatedClinics.map((e) => e.totalRating);

    topRatedClinics.sort((a, b) => b.averageRating - a.averageRating);

    const doctorsWithAvgRating = topRatedClinics.map((entry) => ({
      user: entry.user,
      services: entry.services || [],
      // clinicRating: entry.clinicRating || [],
      totalRating: entry.rateCounts.toString() || null,
      averageRating:
        averageRating % 1 === 0
          ? averageRating.toFixed(1)
          : parseFloat(averageRating.toFixed(1)),
    }));

    console.log(doctorsWithAvgRating.map((e) => e.averageRating));

    let newResults = [];
    const notRated = clinics.filter((d) => !d.doctorRated);

    if (doctorsWithAvgRating.map((e) => e.averageRating === '')) {
      newResults = [...notRated];
    } else {
      newResults = [...doctorsWithAvgRating, ...notRated];
    }

    newResults = [...doctorsWithAvgRating, ...notRated];

    return newResults;
  } catch (error) {
    throw new InternalServerErrorException(messages.errorServer);
  }
}
