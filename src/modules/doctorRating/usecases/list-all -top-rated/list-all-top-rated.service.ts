import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { IRatingRepository } from '../../repository/interface/IDoctorRatingRepository';
import { TopResponseAllDoctor } from '../../dtos/topRatedDoctors';
import { messages } from 'src/utils/shared/errorsMessages';
import { findSupabaseFileService } from 'src/utils/shared/providers/storageProviders/implementations/supaBase/findPhotoFile';

@Injectable()
export class ListAllTopRatingService {
  constructor(private readonly repo: IRatingRepository) {}

  async findAllTopRated(): Promise<TopResponseAllDoctor[]> {
    const topRatedDoctors = await this.repo.findTopRatedDoctors();
    const result = calculateDoctorRating(topRatedDoctors);

    for (const doctor of result) {
      if (doctor.user.avatar !== null) {
        const url = await findSupabaseFileService.getPhotoUrl(
          doctor.user.avatar,
        );
        doctor.user.avatar = url.toString();
      }
    }
    return result;
  }
}

export function calculateDoctorRating(
  doctors: TopResponseAllDoctor[],
): TopResponseAllDoctor[] {
  try {
    const topRatedDoctor = doctors.map((doctor) => {
      const ratings = doctor.rating;
      const totalRating = ratings.reduce((sum, rating) => sum + rating.rate, 0);
      const averageRating =
        ratings.length > 0 ? totalRating / ratings.length : 0;

      return { doctor, averageRating, totalRating };
    });

    const result = topRatedDoctor.map((e) => e.totalRating);
    console.log(result);
    topRatedDoctor.sort((a, b) => b.averageRating - a.averageRating);

    const doctorsWithAvgRating = topRatedDoctor.map((entry) => {
      return {
        specialty: entry.doctor.specialty,
        bio: entry.doctor.bio,
        registrationNumber: entry.doctor.registrationNumber,
        doctor: entry.doctor,
        user: entry.doctor.user,
        rating: entry.doctor.rating,
        institutions: entry.doctor.institutions,
        totalRating: entry.totalRating,
        averageRating:
          entry.averageRating % 1 === 0
            ? entry.averageRating.toFixed(1)
            : parseFloat(entry.averageRating.toFixed(1)),
      };
    });

    const notRated = doctors.filter((d) => !d.rating);

    const newResults = [...doctorsWithAvgRating, ...notRated];

    return newResults;
  } catch (error) {
    throw new InternalServerErrorException(messages.errorServer);
  }
}
