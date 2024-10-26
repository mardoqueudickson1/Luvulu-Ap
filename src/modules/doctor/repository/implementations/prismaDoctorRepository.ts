import { CreateDoctorPartial } from '../../dtos/create-doctor.input';
import { PrismaService } from '../../../prisma/prisma.service';
import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { IDoctorRepository } from '../interface/IDoctorRepository';
import { Doctors } from '../../entities/doctor.entity';
import { UpdateDoctorInput } from '../../dtos/update-doctor.input';
import { ResponseDoctor, ResponseUser } from '../../dtos/response-doctor';
import { messages } from 'src/utils/shared/errorsMessages';
import { ResponseProfileDoctor } from '../../dtos/profile-doctor';
import {
  InstitutionIResponse,
  ResponseAllDoctor,
} from '../../dtos/response-all-doctor';
import { addMinutes, format } from 'date-fns';
import { DoctorScheduleOutput } from '../../dtos/doctor-schedule-output';

import {
  AssociateDoctorInput,
  AssociateDoctorResponse,
} from '../../dtos/doctorInstitution';
import { AppointmentStatus } from '@prisma/client';
import { Appointments } from 'src/modules/appointments/entities/appointments.entity';
import { DoctorFilterOptions } from '../../dtos/doctor-filter-option';
import { TopResponseAllDoctor } from 'src/modules/doctorRating/dtos/topRatedDoctors';
import { ResponseAllAppointPatient } from 'src/modules/appointments/dtos/responseAllAppointments';
import { changeDoctorPasswordInput } from '../../dtos/change-password';

@Injectable()
export class PrismaDoctorRepositoy implements IDoctorRepository {
  constructor(private prisma: PrismaService) {}

  async findAllDoctorNear(): Promise<ResponseAllDoctor[]> {
    throw new Error('Method not implemented.');
  }

  async findUser(id: string): Promise<ResponseUser> {
    const user = await this.prisma.user.findUnique({
      where: {
        id: id,
      },
      select: {
        id: true,
        Doctor: {
          select: {
            id: true,
          },
        },
        Institution: {
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
      Institution: user.Institution[0],
      Doctor: user.Doctor[0],
    };
    return result;
  }

  async findById(userID: string): Promise<ResponseDoctor> {
    const doctorInfo = await this.prisma.doctor.findUnique({
      where: {
        id: userID,
      },

      select: {
        id: true,
        specialty: true,
        institutionId: true,
        registrationNumber: true,
        bio: true,
        Favorites: {
          select: {
            doctor: true,
          },
        },
        institution: {
          include: {
            institution: {
              select: {
                user: {
                  select: {
                    name: true,
                  },
                },
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
            BI: true,
            neigbhod: true,
            city: true,
            password: true,
            nif: true,
            FatherName: true,
            MotherName: true,
            avatar: true,
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

    const responseDoctor: ResponseDoctor = {
      id: doctorInfo.id,
      specialty: doctorInfo.specialty,
      institutionId: doctorInfo.institutionId,
      registrationNumber: doctorInfo.registrationNumber,
      bio: doctorInfo.bio,
      institution: {
        name: doctorInfo.institution.map((e) => e.institution.user.name),
      },

      user: {
        id: doctorInfo.user.id,
        name: doctorInfo.user.name,
        email: doctorInfo.user.email,
        password: doctorInfo.user.password,
        nationality: doctorInfo.user.nationality,
        Role: doctorInfo.user.Role,
        phone: doctorInfo.user.phone,
        avatar: doctorInfo.user.avatar,
        birthday: doctorInfo.user.birthday,
        gender: doctorInfo.user.gender,
        BI: doctorInfo.user.BI,
        neigbhod: doctorInfo.user.neigbhod,
        city: doctorInfo.user.city,
        nif: doctorInfo.user.nif,
        FatherName: doctorInfo.user.FatherName,
        MotherName: doctorInfo.user.MotherName,
        type: doctorInfo.user.type,
        municipality: doctorInfo.user.municipality,
        addressComplement: doctorInfo.user.addressComplement,
        createdAt: doctorInfo.user.createdAt,
        updatedAt: doctorInfo.user.updatedAt,
        deletedAt: doctorInfo.user.deletedAt,
      },
    };

    return responseDoctor;
  }

  async profile(id: string): Promise<ResponseProfileDoctor> {
    const user = await this.prisma.user.findUnique({
      where: {
        id: id,
      },
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
        createdAt: true,
        updatedAt: true,
        deletedAt: true,
        Doctor: {
          select: {
            id: true,
            bio: true,
            specialty: true,
            registrationNumber: true,
          },
        },
      },
    });

    const result: ResponseProfileDoctor = {
      id: user.id,
      bio: user.Doctor[0].bio,
      specialty: user.Doctor[0].specialty,
      registrationNumber: user.Doctor[0].registrationNumber,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        avatar: user.avatar,
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

    return result;
  }

  async create({
    userId,
    registrationNumber,
    specialty,
    bio,
    institutionId,
  }: CreateDoctorPartial): Promise<Doctors> {
    const doctor = await this.prisma.doctor.create({
      data: {
        userId,
        registrationNumber,
        specialty,
        bio,
        institutionId,
      },
    });

    await this.prisma.doctorInstitution.create({
      data: {
        institutionId: institutionId,
        doctorId: doctor.id,
      },
    });

    return doctor;
  }

  async remove({ id }: { id: string }): Promise<void> {
    await this.prisma.doctor.delete({ where: { id: id } });
  }

  async findAll(): Promise<ResponseAllDoctor[]> {
    const doctors = await this.prisma.doctor.findMany({
      include: {
        institution: {
          select: {
            institution: {
              select: {
                user: true,
              },
            },
          },
        },
        rating: true,
        user: true,
      },
    });

    const response: ResponseAllDoctor[] = doctors.map((doctor) => {
      const institutionArray: any[] = doctor.institution.map((e) => ({
        id: e.institution.user.id,
        name: e.institution.user.name,
        email: e.institution.user.email,
        nationality: e.institution.user.nationality,
        Role: e.institution.user.Role,
        phone: e.institution.user.phone,
        birthday: e.institution.user.birthday,
        gender: e.institution.user.gender,
        neigbhod: e.institution.user.neigbhod,
        city: e.institution.user.city,
        nif: e.institution.user.nif,
        FatherName: e.institution.user.FatherName,
        MotherName: e.institution.user.MotherName,
        municipality: e.institution.user.municipality,
        addressComplement: e.institution.user.addressComplement,
      }));

      return {
        rating: doctor.rating,
        id: doctor.id,
        specialty: doctor.specialty,
        bio: doctor.bio,
        registrationNumber: doctor.registrationNumber,
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
  }

  async findDoctorByClinicId(id: string): Promise<ResponseAllDoctor[]> {
    const doctors = await this.prisma.doctor.findMany({
      where: {
        institutionId: id,
      },
      include: {
        institution: {
          select: {
            institution: {
              select: {
                user: true,
              },
            },
          },
        },
        user: true,
      },
    });

    const response: ResponseAllDoctor[] = doctors.map((doctor) => {
      const institutionArray: any[] = doctor.institution.map((e) => ({
        id: e.institution.user.id,
        name: e.institution.user.name,
        email: e.institution.user.email,
        nationality: e.institution.user.nationality,
        Role: e.institution.user.Role,
        phone: e.institution.user.phone,
        birthday: e.institution.user.birthday,
        gender: e.institution.user.gender,
        neigbhod: e.institution.user.neigbhod,
        city: e.institution.user.city,
        nif: e.institution.user.nif,
        FatherName: e.institution.user.FatherName,
        MotherName: e.institution.user.MotherName,
        municipality: e.institution.user.municipality,
        addressComplement: e.institution.user.addressComplement,
      }));
      return {
        id: doctor.id,
        specialty: doctor.specialty,
        bio: doctor.bio,
        registrationNumber: doctor.registrationNumber,
        user: {
          id: doctor.id,
          name: doctor.user.name,
          email: doctor.user.email,
          avatar: doctor.user.avatar || null,
          nationality: doctor.user.nationality,
          Role: doctor.user.Role,
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
  }

  async findByEmail(email: string): Promise<Doctors> {
    return await this.prisma.doctor.findFirst({
      where: {
        user: {
          email: email,
        },
      },
    });
  }

  async getScheduleByDoctorId(doctorId: string): Promise<DoctorScheduleOutput> {
    const doctor = await this.prisma.doctor.findUnique({
      where: { id: doctorId },
      include: {
        WeeklySchedule: {
          orderBy: { dayOfWeek: 'asc' },
        },
        institution: {
          select: {
            id: true,
            institution: {
              select: {
                id: true,
                user: {
                  select: {
                    id: true,
                    name: true,
                  },
                },
              },
            },
          },
        },
        user: {
          select: {
            id: true,
            name: true,
            nationality: true,
          },
        },
      },
    });

    const schedule = doctor.WeeklySchedule[0];
    const dayOfWeek = schedule.dayOfWeek.getDay();
    const { startTime, endTime, interval } = schedule;
    const horarios = [];
    let horarioAtual = new Date(startTime);
    const horarioFim = new Date(endTime);
    const horarioInicioComercial = new Date(startTime);
    horarioInicioComercial.setHours(8, 0, 0, 0);

    if (horarioAtual < horarioInicioComercial) {
      horarioAtual = horarioInicioComercial;
    }

    while (horarioAtual < horarioFim) {
      const horarioFormatado = format(horarioAtual, 'HH:mm');
      horarios.push(horarioFormatado);
      horarioAtual = addMinutes(horarioAtual, interval);
    }

    const doctorSchedule: DoctorScheduleOutput = {
      dayOfWeek,
      doctor: {
        id: doctor.id,
        bio: doctor.bio,
        user: {
          id: doctor.user.id,
          name: doctor.user.name,
        },
      },
      institution: {
        id: doctor.institution[0].id,
        user: {
          id: doctor.institution[0].institution.id,
          name: doctor.institution[0].institution.user.name,
        },
      },
      hours: horarios,
    };

    return doctorSchedule;
  }

  async associateDoctor(
    data: AssociateDoctorInput,
  ): Promise<AssociateDoctorResponse> {
    return await this.prisma.doctorInstitution.create({
      data: {
        doctorId: data.doctorId,
        institutionId: data.institutionId,
      },
    });
  }

  async desasociateDoctor(
    data: AssociateDoctorInput,
  ): Promise<{ message: string }> {
    const result = await this.prisma.doctorInstitution.deleteMany({
      where: {
        doctorId: data.doctorId,
        institutionId: data.institutionId,
      },
    });

    if (result.count === 0) {
      return { message: messages.doctorNotFound };
    }
    return { message: 'Usuário desvinculado com sucesso' };
  }

  async isDoctorAssociatedWithClinic(
    doctorId: string,
    institutionId: string,
  ): Promise<AssociateDoctorResponse> {
    const doctorInstitution = await this.prisma.doctorInstitution.findUnique({
      where: {
        doctorId_institutionId: {
          doctorId,
          institutionId,
        },
      },
    });

    return doctorInstitution;
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

  async findClinicOFDoctor(id: string): Promise<InstitutionIResponse[]> {
    const doctorInfo = await this.prisma.doctor.findMany({
      where: { id: id },
      include: {
        user: true,
        institution: {
          select: {
            institution: {
              select: {
                id: true,
                user: true,
                service: {
                  select: {
                    name: true,
                  },
                },
              },
            },
          },
        },
      },
    });

    const response: InstitutionIResponse[] = doctorInfo.map((doctor) => {
      const institutionArray: any[] = doctor.institution.map((e) => ({
        id: e.institution.id,
        name: e.institution.user.name,
        email: e.institution.user.email,
        nationality: e.institution.user.nationality,
        Role: e.institution.user.Role,
        phone: e.institution.user.phone,
        birthday: e.institution.user.birthday,
        gender: e.institution.user.gender,
        neigbhod: e.institution.user.neigbhod,
        city: e.institution.user.city,
        nif: e.institution.user.nif,
        FatherName: e.institution.user.FatherName,
        MotherName: e.institution.user.MotherName,
        municipality: e.institution.user.municipality,
        addressComplement: e.institution.user.addressComplement,
        service: e.institution.service.map((e) => e.name),
      }));
      return {
        institutions: institutionArray,
      };
    });
    return response;
  }

  async DoctorFilter(
    filterOptions: DoctorFilterOptions,
  ): Promise<TopResponseAllDoctor[]> {
    const doctors = await this.prisma.doctor.findMany({
      where: {
        AND: [
          filterOptions.starts
            ? { rating: { some: { rate: filterOptions.starts } } }
            : undefined,

          filterOptions.neighbor
            ? { user: { neigbhod: filterOptions.neighbor } }
            : undefined,

          filterOptions.city
            ? { user: { city: filterOptions.city } }
            : undefined,

          filterOptions.speciality
            ? { specialty: filterOptions.speciality }
            : undefined,

          filterOptions.gender
            ? { user: { gender: filterOptions.gender } }
            : undefined,
        ].filter(Boolean),
      },
      select: {
        id: true,
        user: true,
        rating: true,
        specialty: true,
        registrationNumber: true,
        bio: true,

        institution: {
          select: {
            institution: {
              select: {
                user: true,
              },
            },
          },
        },
      },
    });

    const response: TopResponseAllDoctor[] = doctors.map((doctor) => {
      const institutionArray: any[] = doctor.institution.map((e) => ({
        id: e.institution.user.id,
        name: e.institution.user.name,
        city: e.institution.user.city,
        municipality: doctor.user.municipality,
        neigbhod: doctor.user.neigbhod,
      }));
      return {
        rating: doctor.rating,
        id: doctor.id,
        specialty: doctor.specialty,
        bio: doctor.bio,
        registrationNumber: doctor.registrationNumber,
        user: {
          id: doctor.id,
          name: doctor.user.name,
          email: doctor.user.email,
          avatar: doctor.user.avatar,
          nationality: doctor.user.nationality,
          Role: doctor.user.Role,
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
  }

  async SearchDoctor(
    name: string,
    page: number,
  ): Promise<TopResponseAllDoctor[]> {
    const perPage = 10;
    const skip = (page - 1) * perPage;

    const count = await this.prisma.doctor.count({
      where: {
        OR: [
          name ? { user: { name: { startsWith: name } } } : undefined,
          name ? { specialty: { startsWith: name } } : undefined,
        ],
      },
    });

    const doctors = await this.prisma.doctor.findMany({
      where: {
        OR: [
          name ? { user: { name: { startsWith: name } } } : undefined,
          name ? { specialty: { startsWith: name } } : undefined,
        ],
      },
      select: {
        id: true,
        user: true,
        rating: true,
      },
      skip,
      take: perPage,
    });
    const result: any[] = doctors.map((e) => ({
      count: count,
      id: e.id,
      user: e.user,
      rating: e.rating,
    }));

    return result;
  }

  // async getDoctorAppointmentsPatients(
  //   doctorId: string,
  // ): Promise<DoctorAppointmentsPatients[]> {
  //   const patients = await this.prisma.appointment.findMany({
  //     where: {
  //       doctorId: doctorId,
  //     },
  //     select: {
  //       pacient: {
  //         select: {
  //           id: true,
  //           user: true,
  //         },
  //       },
  //     },
  //   });
  //   const result: DoctorAppointmentsPatients[] = patients.map((e) => ({
  //     patients: e.pacient.user,
  //   }));

  //   return result;
  // }

  async getDoctorAppointmentsPatients(
    patientId: string,
  ): Promise<ResponseAllAppointPatient[]> {
    try {
      const appointmentsData = await this.prisma.appointment.findMany({
        where: { patientId: patientId },
        include: {
          pacient: {
            include: {
              user: true,
            },
          },
          consultationType: {
            select: {
              id: true,
              name: true,
            },
          },
          Doctor: {
            include: {
              user: true,
            },
          },
          institution: {
            include: {
              user: true,
            },
          },
        },
      });

      const appointments: ResponseAllAppointPatient[] = appointmentsData.map(
        (appointment) => ({
          id: appointment.id,
          isUrgent: appointment.isUrgent,
          pacient: {
            id: appointment.pacient.id,
            name: appointment.pacient.user.name,
            email: appointment.pacient.user.email,
            city: appointment.pacient.user.city,
            avatar: appointment.pacient.user.avatar || null,
            neigbhod: appointment.pacient.user.neigbhod,
            addressComplement: appointment.pacient.user.addressComplement,
            municipality: appointment.pacient.user.municipality,
            phone: appointment.pacient.user.phone,
            birthday: appointment.pacient.user.birthday,
            gender: appointment.pacient.user.gender,
            FatherName: appointment.pacient.user.FatherName,
            MotherName: appointment.pacient.user.MotherName,
          },
          date: new Date(appointment.date),
          status: appointment.status,
          symptomDescription: appointment.symptomDescription,
          createdAt: appointment.createdAt,
          updatedAt: appointment.updatedAt,
          consultationType: appointment.consultationType.name,
          doctor: {
            id: appointment.Doctor.id,
            bio: appointment.Doctor.bio,
            isOnVacation: appointment.Doctor.isOnVacation,
            specialty: appointment.Doctor.specialty,
            user: {
              id: appointment.Doctor.id,
              name: appointment.Doctor.user.name,
              email: appointment.Doctor.user.email,
              avatar: appointment.Doctor.user.avatar,
              city: appointment.Doctor.user.city,
              neigbhod: appointment.Doctor.user.neigbhod,
              addressComplement: appointment.Doctor.user.addressComplement,
              municipality: appointment.Doctor.user.municipality,
            },
          },
          institution: {
            id: appointment.institution.id,
            createdAt: appointment.institution.createdAt,
            updatedAt: appointment.institution.updatedAt,
            user: {
              id: appointment.institution.id,
              name: appointment.institution.user.name,
              avatar: appointment.institution.user.avatar,
              email: appointment.institution.user.email,
              city: appointment.institution.user.city,
              neigbhod: appointment.institution.user.neigbhod,
              addressComplement: appointment.institution.user.addressComplement,
              municipality: appointment.institution.user.municipality,
            },
          },
        }),
      );

      return appointments;
    } catch (error) {
      throw new InternalServerErrorException(messages.errorPatientAppointment);
    }
  }

  async updatePassword(data: changeDoctorPasswordInput): Promise<Doctors> {
    return await this.prisma.doctor.update({
      where: { id: data.doctorId },
      data: {
        user: {
          update: {
            password: data.newPassword,
          },
        },
      },
    });
  }

  async update(doctor: UpdateDoctorInput): Promise<Doctors> {
    return await this.prisma.doctor.update({
      where: { id: doctor.id },
      data: {
        bio: doctor.bio,
        specialty: doctor.specialty,
        isOnVacation: doctor.isOnVacation,
        user: {
          update: {
            data: {
              name: doctor.name,
              city: doctor.city,
              email: doctor.email,
              birthday: doctor.birthday,
              FatherName: doctor.FatherName,
              MotherName: doctor.MotherName,
              gender: doctor.gender,
              addressComplement: doctor.addressComplement,
              neigbhod: doctor.neigbhod,
              phone: doctor.phone,
              nationality: doctor.nationality,
              municipality: doctor.municipality,
            },
          },
        },
      },
    });
  }
}
