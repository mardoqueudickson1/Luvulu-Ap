import { CreatePatientPartial } from '../../../patient/dtos/create-patient.input';
import { Patients } from '../../../patient/entities/patient.entity';
import { PrismaService } from '../../../prisma/prisma.service';
import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { IPatientRepository } from '../interface/IPatientRepository';
import { PatientProfileOutput } from '../../dtos/profile-patient.output';
import { FindAllPatientResponse } from '../../dtos/findAllPatientReponse';
import {
  ResponsePatientOutput,
  ResponseUser,
} from '../../dtos/reponsePatientOutput';
import { messages } from 'src/utils/shared/errorsMessages';
import { AppointmentStatus } from '@prisma/client';
import { Appointments } from 'src/modules/appointments/entities/appointments.entity';
import { changePasswordInput } from '../../dtos/change-password';
import { UpdatePatientInput } from '../../dtos/update-patient.input';

@Injectable()
export class PrismaPatitientRepositoy implements IPatientRepository {
  constructor(private prisma: PrismaService) {}

  async create({ userId, number }: CreatePatientPartial): Promise<Patients> {
    return this.prisma.patient.create({
      data: {
        userId,
        number,
      },
    });
  }

  async findById(userID: string): Promise<ResponsePatientOutput> {
    const patient = await this.prisma.patient.findUnique({
      where: {
        id: userID,
      },
      select: {
        id: true,
        number: true,
        createdAt: true,
        updatedAt: true,
        deletedAt: true,
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
            type: true,
            avatar: true,
            password: true,
            municipality: true,
            addressComplement: true,
            createdAt: true,
            updatedAt: true,
            deletedAt: true,
          },
        },
      },
    });

    const responseDoctor: any = {
      id: patient.id,
      number: patient.number,
      user: {
        id: patient.user.id,
        name: patient.user.name,
        email: patient.user.email,
        avatar: patient.user.avatar,
        password: patient.user.password,
        nationality: patient.user.nationality,
        Role: patient.user.Role,
        phone: patient.user.phone,
        birthday: patient.user.birthday,
        gender: patient.user.gender,
        BI: patient.user.BI,
        neigbhod: patient.user.neigbhod,
        city: patient.user.city,
        nif: patient.user.nif,
        FatherName: patient.user.FatherName,
        MotherName: patient.user.MotherName,
        type: patient.user.type,
        municipality: patient.user.municipality,
        addressComplement: patient.user.addressComplement,
        createdAt: patient.user.createdAt,
        updatedAt: patient.user.updatedAt,
        deletedAt: patient.user.deletedAt,
      },
    };

    return responseDoctor;
  }

  async remove({ id }: { id: string }): Promise<void> {
    await this.prisma.patient.delete({ where: { id: id } });
  }

  async findAll(): Promise<FindAllPatientResponse[]> {
    try {
      return await this.prisma.patient.findMany({
        include: {
          user: {
            select: {
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
    } catch (error) {
      throw new InternalServerErrorException(messages.errorServer);
    }
  }

  async findByEmail(email: string): Promise<Patients> {
    return await this.prisma.patient.findFirst({
      where: {
        user: {
          email: email,
        },
      },
    });
  }

  async profile(id: string): Promise<PatientProfileOutput> {
    try {
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
          birthday: true,
          gender: true,
          neigbhod: true,
          city: true,
          nif: true,
          BI: true,
          FatherName: true,
          MotherName: true,
          type: true,
          password: true,
          avatar: true,
          municipality: true,
          addressComplement: true,
          createdAt: true,
          updatedAt: true,
          deletedAt: true,
          Patient: {
            select: {
              id: true,
              number: true,
              patientCard: true,
              Qrcode: {
                select: {
                  code: true,
                },
              },
            },
          },
        },
      });

      const result: PatientProfileOutput = {
        pacientCardID: user.Patient[0].patientCard.map((e) => e.id) || null,
        number: user.Patient[0].number,
        qrCode: user.Patient[0]?.Qrcode[0]?.code || null,
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
          avatar: user.avatar,
          nationality: user.nationality,
          Role: user.Role,
          phone: user.phone,
          password: user.password,
          birthday: user.birthday,
          gender: user.gender,
          BI: user.BI,
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

      return result;
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException(messages.errorServer);
    }
  }

  async findPatientByUserId(id: string): Promise<ResponseUser> {
    try {
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

      if (!user) {
        throw new NotFoundException(messages.userNotfound);
      }

      const result: ResponseUser = {
        patient: user.Patient[0],
      };
      return result;
    } catch (error) {
      throw new InternalServerErrorException(messages.errorServer);
    }
  }

  async changeAppointmentStatus(
    appointmentId: string,
    status: AppointmentStatus,
  ): Promise<Appointments> {
    try {
      const appointment = await this.prisma.appointment.update({
        where: { id: appointmentId },
        data: { status: status },
      });

      return appointment;
    } catch (error) {
      throw new InternalServerErrorException(messages.errorServer);
    }
  }

  async updatePassword(data: changePasswordInput): Promise<Patients> {
    return await this.prisma.patient.update({
      where: { id: data.patientId },
      data: {
        user: {
          update: {
            password: data.newPassword,
          },
        },
      },
    });
  }

  async update(data: UpdatePatientInput): Promise<Patients> {
    return await this.prisma.patient.update({
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
