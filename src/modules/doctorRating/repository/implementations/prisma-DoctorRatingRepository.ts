import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';
import { CreateRatingInput } from '../../dtos/create-rating.input';
import { updateRating } from '../../dtos/update-rating.input';
import { Ratings } from '../../entities/rating.entity';
import { IRatingRepository } from '../interface/IDoctorRatingRepository';
import {
  InstitutionResult,
  TopResponseAllDoctor,
} from '../../dtos/topRatedDoctors';
import { FavoriteType } from 'src/modules/favorites/dtos/favoriteType';
import { messages } from 'src/utils/shared/errorsMessages';

@Injectable()
export class PrismaRatingRepositoy implements IRatingRepository {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateRatingInput): Promise<Ratings> {
    return this.prisma.rating.create({
      data: {
        appoitmentID: data.appoitmentID,
        userId: data.userId,
        doctorId: data.doctorId,
        rate: data.rate,
        comment: data.comment,
      },
    });
  }

  async update(id: string, data: updateRating): Promise<Ratings> {
    return this.prisma.rating.update({
      where: { id: id },
      data: data,
    });
  }

  async findById(id: string): Promise<Ratings> {
    return await this.prisma.rating.findUnique({ where: { id: id } });
  }

  async findUserRatingForDoctor(
    userId: string,
    doctorId: string,
  ): Promise<Ratings> {
    return await this.prisma.rating.findFirst({
      where: {
        userId: userId,
        doctorId: doctorId,
      },
    });
  }

  async remove({ id }: { id: string }): Promise<void> {
    await this.prisma.rating.delete({ where: { id: id } });
  }

  async findAll(): Promise<Ratings[]> {
    return await this.prisma.rating.findMany();
  }

  async findTopRatedDoctors(): Promise<TopResponseAllDoctor[]> {
    try {
      const topRated = await this.prisma.doctor.findMany({
        include: {
          rating: {
            select: {
              id: true,
              comment: true,
              doctorId: true,
              userId: true,
              rate: true,
            },
          },
          institution: {
            include: {
              institution: {
                select: {
                  id: true,
                  user: true,
                },
              },
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
              avatar: true,
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

      const response: TopResponseAllDoctor[] = topRated.map((doctor) => {
        const institutionArray: InstitutionResult[] = doctor.institution.map(
          (e) => ({
            id: e.institution.id,
            name: e.institution.user.name,
            city: e.institution.user.city,
            municipality: doctor.user.municipality,
            neigbhod: doctor.user.neigbhod,
          }),
        );

        return {
          specialty: doctor.specialty,
          bio: doctor.bio,
          registrationNumber: doctor.registrationNumber,
          rating: doctor.rating,
          user: {
            id: doctor.id,
            name: doctor.user.name,
            email: doctor.user.email,
            nationality: doctor.user.nationality,
            Role: doctor.user.Role,
            avatar: doctor.user.avatar,
            phone: doctor.user.phone,
            birthday: doctor.user.birthday,
            gender: doctor.user.gender,
            neigbhod: doctor.user.neigbhod,
            city: doctor.user.city,
            nif: doctor.user.nif,
            FatherName: doctor.user.FatherName,
            MotherName: doctor.user.MotherName,
            municipality: doctor.user.municipality,
            addressComplement: doctor.user.addressComplement,
          },
          institutions: institutionArray,
        };
      });

      return response;
    } catch (error) {}
  }

  async findOneDoctorWithRate(data: string): Promise<TopResponseAllDoctor> {
    try {
      const doctorInfo = await this.prisma.doctor.findUnique({
        where: {
          id: data,
        },
        select: {
          id: true,
          specialty: true,
          institutionId: true,
          registrationNumber: true,
          bio: true,
          Favorites: {
            where: {
              doctorId: data,
            },
          },
          rating: {
            select: {
              id: true,
              comment: true,
              doctorId: true,
              userId: true,
              rate: true,
              user: true,
            },
          },
          Consultation: {
            select: {
              status: true,
            },
          },
          institution: {
            include: {
              institution: {
                select: {
                  id: true,
                  user: true,
                },
              },
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
              avatar: true,
              BI: true,
              neigbhod: true,
              city: true,
              nif: true,
              FatherName: true,
              MotherName: true,
              type: true,
              municipality: true,
              addressComplement: true,
              createdAt: true,
              updatedAt: true,
              deletedAt: true,
            },
          },
        },
      });
      const isFavorited = doctorInfo.Favorites.length > 0;

      const institutionData: any[] = doctorInfo.institution
        .filter((e) => e.institution && e.institution.user)
        .map((e) => ({
          id: e.institution.id,
          name: e.institution.user.name,
          city: e.institution.user.city,
          municipality: e.institution.user.municipality,
        }));

      let closedConsultationsCount = 0;

      closedConsultationsCount = doctorInfo.Consultation.filter(
        (consultation) => consultation.status === 'FINESHED',
      ).length;

      const responseDoctor: any = {
        pacientCared: closedConsultationsCount,
        id: doctorInfo.id,

        isFavorited: isFavorited,

        specialty: doctorInfo.specialty,
        institutionId: doctorInfo.institutionId,
        registrationNumber: doctorInfo.registrationNumber,
        bio: doctorInfo.bio,
        rating: doctorInfo.rating.map((e) => ({
          user: e.user,
          comment: e.comment,
          doctorId: e.doctorId,
          userId: e.user,
          rate: e.rate,
        })),
        institutions: institutionData,
        user: {
          id: doctorInfo.id,
          name: doctorInfo.user.name,
          avatar: doctorInfo.user.avatar,
          email: doctorInfo.user.email,
          nationality: doctorInfo.user.nationality,
          Role: doctorInfo.user.Role,
          phone: doctorInfo.user.phone,
          gender: doctorInfo.user.gender,
          neigbhod: doctorInfo.user.neigbhod,
          city: doctorInfo.user.city,
          nif: doctorInfo.user.nif,
          municipality: doctorInfo.user.municipality,
          addressComplement: doctorInfo.user.addressComplement,
        },
      };

      return responseDoctor;
    } catch (error) {
      throw new InternalServerErrorException(messages.errorServer);
    }
  }

  async findUser(id: string): Promise<FavoriteType> {
    const user = await this.prisma.user.findUnique({
      where: {
        id: id,
      },
      select: {
        id: true,
        Patient: {
          select: {
            id: true,
          },
        },
      },
    });

    const result: FavoriteType = {
      pacient: user.Patient[0],
    };
    return result;
  }
}
