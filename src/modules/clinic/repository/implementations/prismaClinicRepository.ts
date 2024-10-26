import { PrismaService } from '../../../prisma/prisma.service';
import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { IClinicRepository } from '../interface/IClinicRepository';
import { CreateClinicPartial } from '../../dtos/create-clinic.input';
import { Clinics } from '../../entities/clinic';
import {
  ClinicResponse,
  NearByclinicResponse,
} from '../../dtos/findAll-clinic.output';
import { ProfileClinicOutput } from '../../dtos/profile-clinic.output';
import { ResponseClinic } from '../../dtos/clinicReponse';
import { Appointments } from 'src/modules/appointments/entities/appointments.entity';
import { AppointmentStatus } from '@prisma/client';
import { ResponseAllAppointClinic } from '../../dtos/responseAllAppointmentByClinic';
import { institionType } from '../../dtos/instition.types';
import { FilterOptions } from '../../dtos/clinic-filter-option';
import { formatName } from 'src/utils/utils';
import { messages } from 'src/utils/shared/errorsMessages';
import { ClinicUpdatePasswordInput } from '../../dtos/change-password';
import { UpdateClinicInput } from '../../dtos/update-clinic.input';

@Injectable()
export class PrismaClinicRepositoy implements IClinicRepository {
  constructor(private prisma: PrismaService) {}

  async create({
    userId,
    clinicLatitude,
    cliniclongitude,
  }: CreateClinicPartial): Promise<Clinics> {
    return this.prisma.institution.create({
      data: {
        userId,
        clinicLatitude,
        cliniclongitude,
      },
    });
  }

  async findById(userID: string): Promise<ResponseClinic> {
    try {
      const clinicInfo = await this.prisma.institution.findUnique({
        where: {
          id: userID,
        },
        select: {
          id: true,

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
              avatar: true,
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

      const responseDoctor: ResponseClinic = {
        id: clinicInfo.id,
        user: {
          id: clinicInfo.user.id,
          name: clinicInfo.user.name,
          email: clinicInfo.user.email,
          avatar: clinicInfo.user.avatar,
          password: '',
          nationality: clinicInfo.user.nationality,
          Role: clinicInfo.user.Role,
          phone: clinicInfo.user.phone,
          birthday: clinicInfo.user.birthday,
          gender: clinicInfo.user.gender,
          BI: clinicInfo.user.BI,
          neigbhod: clinicInfo.user.neigbhod,
          city: clinicInfo.user.city,
          nif: clinicInfo.user.nif,
          FatherName: clinicInfo.user.FatherName,
          MotherName: clinicInfo.user.MotherName,
          type: clinicInfo.user.type,
          municipality: clinicInfo.user.municipality,
          addressComplement: clinicInfo.user.addressComplement,
          createdAt: clinicInfo.user.createdAt,
          updatedAt: clinicInfo.user.updatedAt,
          deletedAt: clinicInfo.user.deletedAt,
        },
      };

      return responseDoctor;
    } catch (error) {
      throw new InternalServerErrorException(messages.errorServer);
    }
  }

  async remove({ id }: { id: string }): Promise<void> {
    await this.prisma.institution.delete({ where: { id: id } });
  }

  async findAll(): Promise<ClinicResponse[]> {
    return await this.prisma.institution.findMany({
      select: {
        id: true,
        clinicLatitude: true,
        cliniclongitude: true,
        ClinicRating: true,
        user: {
          select: {
            id: true,
            name: true,
            email: true,
            nationality: true,
            avatar: true,
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
  }

  async findByEmail(email: string): Promise<Clinics> {
    return await this.prisma.institution.findFirst({
      where: {
        user: {
          email: email,
        },
      },
    });
  }

  async profile(id: string): Promise<ProfileClinicOutput> {
    const user = await this.prisma.user.findUnique({
      where: {
        id: id,
      },
      select: {
        id: true,
        name: true,
        email: true,
        nationality: true,
        Role: true,
        phone: true,
        avatar: true,
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
        createdAt: true,
        updatedAt: true,
        deletedAt: true,
      },
    });

    const clinicResponse: ProfileClinicOutput = {
      user: {
        id: user.id,
        name: user.name,
        avatar: user.avatar,
        email: user.email,
        nationality: user.nationality,
        Role: user.Role,
        phone: user.phone,
        birthday: user.birthday,
        gender: user.gender,
        BI: '',
        password: '',
        neigbhod: user.neigbhod,
        city: user.city,
        nif: user.nif,
        FatherName: user.FatherName,
        MotherName: user.MotherName,
        type: user.type,
        municipality: user.municipality,
        addressComplement: user.addressComplement,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
        deletedAt: user.deletedAt,
      },
    };

    return clinicResponse;
  }

  async findClinicId(userID: string): Promise<ResponseClinic> {
    const clinicInfo = await this.prisma.institution.findUnique({
      where: {
        id: userID,
      },
      select: {
        id: true,
        user: {
          select: {
            id: true,
            name: true,
            email: true,
            nationality: true,
            avatar: true,
            Role: true,
            password: true,
            phone: true,
            birthday: true,
            gender: true,
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

    const response: any = {
      id: clinicInfo.id,
      user: {
        id: clinicInfo.user.id,
        name: clinicInfo.user.name,
        email: clinicInfo.user.email,
        avatar: clinicInfo.user.avatar,
        nationality: clinicInfo.user.nationality,
        Role: clinicInfo.user.Role,
        password: clinicInfo.user.password,
        phone: clinicInfo.user.phone,
        birthday: clinicInfo.user.birthday,
        gender: clinicInfo.user.gender,
        BI: clinicInfo.user.BI,
        neigbhod: clinicInfo.user.neigbhod,
        city: clinicInfo.user.city,
        nif: clinicInfo.user.nif,
        FatherName: clinicInfo.user.FatherName,
        MotherName: clinicInfo.user.MotherName,
        type: clinicInfo.user.type,
        municipality: clinicInfo.user.municipality,
        addressComplement: clinicInfo.user.addressComplement,
        createdAt: clinicInfo.user.createdAt,
        updatedAt: clinicInfo.user.updatedAt,
        deletedAt: clinicInfo.user.deletedAt,
      },
    };

    return response;
  }

  async changeAppointmentStatus(
    appointmentId: string,
    newStatus: AppointmentStatus,
  ): Promise<Appointments> {
    const appointment = await this.prisma.appointment.update({
      where: { id: appointmentId },
      data: { status: newStatus },
    });

    return appointment;
  }

  async findUserClinicId(id: string): Promise<institionType> {
    const user = await this.prisma.user.findUnique({
      where: {
        id: id,
      },
      select: {
        id: true,
        Institution: {
          select: {
            id: true,
          },
        },
      },
    });

    const result: institionType = {
      instition: user.Institution[0],
    };
    return result;
  }

  async findAppoitmentByClinicId(
    instituitionId: string,
  ): Promise<ResponseAllAppointClinic[]> {
    try {
      const appointmentsData = await this.prisma.appointment.findMany({
        where: { institutionId: instituitionId },
        include: {
          Doctor: {
            include: {
              user: true,
            },
          },
          consultationType: true,
          pacient: {
            include: {
              user: true,
            },
          },
        },
      });

      const appointments: ResponseAllAppointClinic[] = appointmentsData.map(
        (appointment) => {
          return {
            id: appointment.id,
            isUrgent: appointment.isUrgent,
            date: new Date(appointment.date),
            status: appointment.status,
            symptomDescription: appointment.symptomDescription,
            createdAt: appointment.createdAt,
            updatedAt: appointment.updatedAt,
            consultationType: {
              id: appointment.consultationType.id,
              name: formatName(appointment.consultationType.name),
              createdAt: appointment.consultationType.createdAt,
              updatedAt: appointment.consultationType.updatedAt,
            },
            doctor: {
              id: appointment.Doctor.id,
              bio: appointment.Doctor.bio,
              isOnVacation: appointment.Doctor.isOnVacation,
              specialty: appointment.Doctor.specialty,
              createdAt: appointment.Doctor.createdAt,
              updatedAt: appointment.Doctor.updatedAt,
              deletedAt: appointment.Doctor.deletedAt,
              user: {
                id: appointment.Doctor.user.id,
                name: formatName(appointment.Doctor.user.name),
              },
            },
            patient: {
              id: appointment.pacient.id,
              createdAt: appointment.pacient.createdAt,
              updatedAt: appointment.pacient.updatedAt,
              user: {
                id: appointment.pacient.user.id,
                name: formatName(appointment.pacient.user.name),
              },
              number: appointment.pacient.number,
            },
          };
        },
      );

      return appointments;
    } catch (error) {
      throw new InternalServerErrorException(messages.errorServer);
    }
  }
  async clinicFilter(
    filterOptions: FilterOptions,
  ): Promise<NearByclinicResponse[]> {
    try {
      const clinics = await this.prisma.institution.findMany({
        where: {
          AND: [
            filterOptions.starts
              ? { ClinicRating: { some: { rate: filterOptions.starts } } }
              : undefined,

            filterOptions.neighbor
              ? { user: { neigbhod: filterOptions.neighbor } }
              : undefined,

            filterOptions.city
              ? { user: { city: filterOptions.city } }
              : undefined,

            filterOptions.municipality
              ? { user: { municipality: filterOptions.municipality } }
              : undefined,
          ].filter(Boolean),
        },
        select: {
          id: true,
          user: true,
          ClinicRating: true,
          service: true,
        },
      });

      const result: NearByclinicResponse[] = clinics.map((e) => ({
        services: e.service,
        clinicRating: e.ClinicRating,
        user: {
          id: e.id,
          name: formatName(e.user.name),
          email: e.user.email,
          nationality: e.user.nationality,
          Role: e.user.Role,
          phone: e.user.phone,
          avatar: e.user.avatar,
          neigbhod: e.user.neigbhod,
          city: e.user.city,
          nif: e.user.nif,
          municipality: e.user.municipality,
          addressComplement: e.user.addressComplement,
        },
        googleMapsLink: '',
      }));

      return result;
    } catch (error) {
      throw new InternalServerErrorException(messages.errorServer);
    }
  }

  async SearchForClinic(
    name: string,
    page: number,
  ): Promise<NearByclinicResponse[]> {
    try {
      const resultsPerPage = 10;
      const skip = (page - 1) * resultsPerPage;

      const whereConditions = [
        name ? { user: { name: { startsWith: name } } } : undefined,
        name
          ? { service: { some: { name: { startsWith: name } } } }
          : undefined,
      ].filter(Boolean);

      const clinics = await this.prisma.institution.findMany({
        where: {
          OR: whereConditions,
        },
        select: {
          id: true,
          user: true,
          ClinicRating: true,
          service: true,
        },
        skip,
        take: resultsPerPage,
      });

      const result: NearByclinicResponse[] = clinics.map((e) => ({
        services: e.service,
        clinicRating: e.ClinicRating,
        user: {
          id: e.id,
          name: formatName(e.user.name),
          email: e.user.email,
          nationality: e.user.nationality,
          Role: e.user.Role,
          phone: e.user.phone,
          avatar: e.user.avatar,
          neigbhod: e.user.neigbhod,
          city: e.user.city,
          nif: e.user.nif,
          municipality: e.user.municipality,
          addressComplement: e.user.addressComplement,
        },
        googleMapsLink: '',
      }));

      return result;
    } catch (error) {
      throw new InternalServerErrorException(messages.errorServer);
    }
  }

  async updatePassword(data: ClinicUpdatePasswordInput): Promise<Clinics> {
    return await this.prisma.institution.update({
      where: { id: data.clinicId },
      data: {
        user: {
          update: {
            password: data.newPassword,
          },
        },
      },
    });
  }

  async update(data: UpdateClinicInput): Promise<Clinics> {
    return await this.prisma.institution.update({
      where: { id: data.id },
      data: {
        user: {
          update: {
            data: data,
          },
        },
      },
    });
  }
}
