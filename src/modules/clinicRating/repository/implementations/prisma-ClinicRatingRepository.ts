import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';
import { ClinicRatings } from '../../entities/ClinicRating.entity';
import { IClinicRatingRepository } from '../interface/IClinicRatingRepository';
import { TopResponseAllClinic } from '../../dtos/topRatedClinic';
import { CreateClinicRatingInput } from '../../dtos/create-rating-clinic.input';
import { updateClinicRating } from '../../dtos/update-ClinicRating';
import { messages } from 'src/utils/shared/errorsMessages';

@Injectable()
export class PrismaClinicRatingRepositoy implements IClinicRatingRepository {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateClinicRatingInput): Promise<ClinicRatings> {
    return this.prisma.clinicRating.create({
      data: {
        userId: data.userId,
        clinicId: data.clinicId,
        rate: data.rate,
        comment: data.comment,
      },
    });
  }

  async update(id: string, data: updateClinicRating): Promise<ClinicRatings> {
    return this.prisma.clinicRating.update({
      where: { id: id },
      data: data,
    });
  }

  async findById(id: string): Promise<ClinicRatings> {
    return await this.prisma.clinicRating.findUnique({ where: { id: id } });
  }

  async findUserRatingForClinic(
    userId: string,
    clinicId: string,
  ): Promise<ClinicRatings> {
    return await this.prisma.clinicRating.findFirst({
      where: {
        userId: userId,
        clinicId: clinicId,
      },
    });
  }

  async remove({ id }: { id: string }): Promise<void> {
    await this.prisma.rating.delete({ where: { id: id } });
  }

  async findAll(): Promise<ClinicRatings[]> {
    return await this.prisma.clinicRating.findMany();
  }

  async findTopRatedClinic(): Promise<TopResponseAllClinic[]> {
    try {
      const topRated = await this.prisma.institution.findMany({
        include: {
          service: {
            select: {
              name: true,
              description: true,
            },
          },

          Doctor: {
            include: {
              Doctor: {
                select: {
                  rating: {
                    select: {
                      rate: true,
                    },
                  },
                },
              },
            },
          },

          ClinicRating: {
            select: {
              id: true,
              comment: true,
              clinicId: true,
              userId: true,
              rate: true,
            },
          },

          user: {
            select: {
              id: true,
              name: true,
              email: true,
              nationality: true,
              Role: true,
              phone: true,
              birthday: true,
              gender: true,
              neigbhod: true,
              city: true,
              nif: true,
              FatherName: true,
              MotherName: true,
              type: true,
              municipality: true,
              addressComplement: true,
            },
          },
        },
      });

      // const los = topRated.map((clinic) => {
      //   if (clinic.Doctor.flatMap((e) => e.Doctor.rating.map((r) => r.rate))) {
      //     console.log('Passou');
      //   } else {
      //     console.log('não passou');
      //   }
      //   return {
      //     doctorRated: clinic.Doctor.flatMap((e) =>
      //       e.Doctor.rating.map((r) => r.rate),
      //     ),
      //   };
      // });

      const response: TopResponseAllClinic[] = topRated.map((clinic) => {
        return {
          // services: doctor.Service,
          // clinicRating: doctor.ClinicRating,
          doctorRated: clinic.Doctor.flatMap((e) =>
            e.Doctor.rating.map((r) => r.rate),
          ),
          user: {
            id: clinic.id,
            name: clinic.user.name,
            email: clinic.user.email,
            nationality: clinic.user.nationality,
            Role: clinic.user.Role,
            phone: clinic.user.phone,
            birthday: clinic.user.birthday,
            gender: clinic.user.gender,
            neigbhod: clinic.user.neigbhod,
            city: clinic.user.city,
            nif: clinic.user.nif,
            FatherName: clinic.user.FatherName,
            MotherName: clinic.user.MotherName,
            municipality: clinic.user.municipality,
            addressComplement: clinic.user.addressComplement,
          },
        };
      });

      return response;
    } catch (error) {
      throw new InternalServerErrorException(messages.errorServer);
    }
  }

  async findOneClinicWithRate(id: string): Promise<TopResponseAllClinic> {
    try {
      const clinicInfo = await this.prisma.institution.findUnique({
        where: {
          id: id,
        },
        select: {
          id: true,
          ClinicRating: {
            select: {
              id: true,
              comment: true,
              clinicId: true,
              userId: true,
              rate: true,
            },
          },
          Doctor: {
            include: {
              Doctor: {
                select: {
                  rating: {
                    select: {
                      rate: true,
                    },
                  },
                },
              },
            },
          },
          Favorites: {
            where: {
              institutionId: id,
            },
          },
          Consultation: {
            select: {
              status: true,
            },
          },

          user: {
            select: {
              id: true,
              name: true,
              email: true,
              nationality: true,
              Role: true,
              phone: true,
              birthday: true,
              gender: true,
              BI: true,
              neigbhod: true,
              city: true,
              nif: true,
              FatherName: true,
              MotherName: true,
              municipality: true,
              addressComplement: true,
              avatar: true,
            },
          },
        },
      });
      let closedConsultationsCount = 0;

      closedConsultationsCount = clinicInfo.Consultation.filter(
        (consultation) => consultation.status === 'FINESHED',
      ).length;

      const isFavorited = clinicInfo.Favorites.length > 0;

      const responseClinic: TopResponseAllClinic = {
        isFavorited: isFavorited,
        pacientsCared: closedConsultationsCount,
        // clinicRating: clinicInfo.ClinicRating,
        doctorRated: clinicInfo.Doctor.flatMap((e) =>
          e.Doctor.rating.map((r) => r.rate),
        ),
        user: {
          id: clinicInfo.id,
          name: clinicInfo.user.name,
          email: clinicInfo.user.email,
          nationality: clinicInfo.user.nationality,
          Role: clinicInfo.user.Role,
          phone: clinicInfo.user.phone,
          neigbhod: clinicInfo.user.neigbhod,
          city: clinicInfo.user.city,
          nif: clinicInfo.user.nif,
          municipality: clinicInfo.user.municipality,
          addressComplement: clinicInfo.user.addressComplement || null,
          avatar: clinicInfo.user.avatar || null,
        },
      };

      return responseClinic;
    } catch (error) {
      throw new InternalServerErrorException(messages.errorServer);
    }
  }
}
