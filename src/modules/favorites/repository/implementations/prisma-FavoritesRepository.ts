import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';
import {
  CreateFavorite,
  RemoveFavorite,
} from '../../dtos/create-favorite-input';
import { Favorite } from '../../entity/favorite.entity';
import { IFavoriteRepository } from '../interface/IFavoriteRepository';
import {
  ResponseAllFavotites,
  FavoriteData,
} from '../../dtos/favorite-response';
import { FavoriteType } from '../../dtos/favoriteType';
import { messages } from 'src/utils/shared/errorsMessages';

@Injectable()
export class PrismaFavoriteRepositoy implements IFavoriteRepository {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateFavorite): Promise<Favorite> {
    if (data.doctorId) {
      const existingFavorite = await this.prisma.favorites.findFirst({
        where: {
          pacientId: data.pacientId,
          doctorId: data.doctorId,
        },
      });
      if (existingFavorite) {
        throw new BadRequestException(messages.favoriteAlreadyExist);
      }
    } else if (data.institutionId) {
      const existingFavorite = await this.prisma.favorites.findFirst({
        where: {
          pacientId: data.pacientId,
          institutionId: data.institutionId,
        },
      });
      if (existingFavorite) {
        throw new BadRequestException(messages.favoriteAlreadyExist);
      }
    }

    return await this.prisma.favorites.create({ data });
  }

  async remove(data: RemoveFavorite): Promise<{ message: string }> {
    if (data.doctorId) {
      const result = await this.prisma.favorites.deleteMany({
        where: {
          pacientId: data.pacientId,
          doctorId: data.doctorId,
        },
      });

      if (result.count === 0) {
        return { message: messages.doctorNotFound };
      }
      return { message: messages.doctorRemovedFavorite };
    } else if (data.institutionId) {
      const result = await this.prisma.favorites.deleteMany({
        where: {
          pacientId: data.pacientId,
          institutionId: data.institutionId,
        },
      });

      if (result.count === 0) {
        return { message: messages.clinicNotFound };
      }
      return { message: messages.clinicRemovedFavorite };
    } else {
      return { message: 'Nenhum favorito removido.' };
    }
  }

  async findAll(id: string): Promise<ResponseAllFavotites[]> {
    try {
      const allFavorites = await this.prisma.favorites.findMany({
        where: { pacientId: id },
        include: {
          doctor: {
            select: {
              id: true,
              specialty: true,
              user: true,
            },
          },
          institution: {
            select: {
              id: true,
              user: true,
            },
          },
        },
      });

      const doctorData: FavoriteData[] = allFavorites
        .filter((e) => e.doctor && e.doctor.user)
        .map((e) => ({
          id: e.doctor.id,
          name: e.doctor.user.name,
          city: e.doctor.user.city,
          municipality: e.doctor.user.municipality,
          specialty: e.doctor.specialty,
          avatar: e.doctor.user.avatar || null,
        }));

      const institutionData: FavoriteData[] = allFavorites
        .filter((e) => e.institution && e.institution.user)
        .map((e) => ({
          id: e.institution.id,
          name: e.institution.user.name,
          city: e.institution.user.city,
          municipality: e.institution.user.municipality,
          avatar: e.institution.user.avatar || null,
        }));

      const result: ResponseAllFavotites[] = [
        {
          doctors: doctorData,
          institutions: institutionData,
        },
      ];

      return result;
    } catch (error) {
      throw new InternalServerErrorException(messages.errorPatientFavorites);
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
