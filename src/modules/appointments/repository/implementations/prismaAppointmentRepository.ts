import { PrismaService } from 'src/modules/prisma/prisma.service';
import { IAppointmentRepository } from '../interface/IAppointmentRepository';
import { UpdateAppointmentInput } from '../../dtos/update-appointment.input';
import { Appointments } from '../../entities/appointments.entity';
import { CreateAppointInput } from '../../dtos/create-appointment.input';
import { AppointmentType } from '../../dtos/appointment.types';
import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { IFindAllInDayFromProvider } from '../../dtos/IFindAllInDayFromProvider.output';
import { ResponseAllAppointPatient } from '../../dtos/responseAllAppointments';
import { messages } from 'src/utils/shared/errorsMessages';

@Injectable()
export class PrismaAppointmentRepositoy implements IAppointmentRepository {
  constructor(private prisma: PrismaService) {}

  async findUser(id: string): Promise<AppointmentType> {
    try {
      const user = await this.prisma.user.findUnique({
        where: {
          id: id,
        },
        select: {
          id: true,
          Institution: true,
          Doctor: true,
          Patient: {
            select: {
              id: true,
            },
          },
        },
      });

      const result: AppointmentType = {
        appointment: user.Patient[0],
        doctor: user.Doctor[0],
        institution: user.Institution[0],
      };
      return result;
    } catch (error) {
      throw new InternalServerErrorException(messages.errorPatientAppointment);
    }
  }

  // async findById(id: string): Promise<ResponseAllAppointPatient> {
  //   const appointment = await this.prisma.appointment.findUnique({
  //     where: { id: id },
  //     include: {
  //       medicalReport: true,
  //       Rating: true,

  //       consultationType: {
  //         select: {
  //           id: true,
  //           name: true,
  //         },
  //       },
  //       pacient: {
  //         select: {
  //           id: true,
  //           user: true,
  //         },
  //       },
  //       Doctor: {
  //         include: {
  //           user: true,
  //         },
  //       },
  //       institution: {
  //         include: {
  //           user: true,
  //         },
  //       },
  //     },
  //   });

  //   const isReported =
  //     appointment.medicalReport && appointment.medicalReport.length > 0
  //       ? true
  //       : false;
  //   const isRated =
  //     appointment.Rating && appointment.Rating.length > 0 ? true : false;

  //   const appointments: ResponseAllAppointPatient = {
  //     isRated: isRated,
  //     isReported: isReported,
  //     medicalReportId: appointment.medicalReport.map((e) => e.id),
  //     description: appointment.symptomDescription,
  //     id: appointment.id,
  //     isUrgent: appointment.isUrgent,
  //     date: new Date(appointment.date),
  //     status: appointment.status,
  //     symptomDescription: appointment.symptomDescription,
  //     createdAt: appointment.createdAt,
  //     updatedAt: appointment.updatedAt,
  //     consultationType: appointment.consultationType.name,
  //     pacient: {
  //       id: appointment.pacient.id,
  //       name: appointment.pacient.user.name,
  //       email: appointment.pacient.user.email,
  //       city: appointment.pacient.user.city,
  //       neigbhod: appointment.pacient.user.neigbhod,
  //       addressComplement: appointment.pacient.user.addressComplement,
  //       municipality: appointment.pacient.user.municipality,
  //       phone: appointment.pacient.user.phone,
  //       birthday: appointment.pacient.user.birthday,
  //       gender: appointment.pacient.user.gender,
  //       FatherName: appointment.pacient.user.FatherName,
  //       MotherName: appointment.pacient.user.MotherName,
  //     },
  //     doctor: {
  //       id: appointment.Doctor.id,
  //       bio: appointment.Doctor.bio,
  //       isOnVacation: appointment.Doctor.isOnVacation,
  //       specialty: appointment.Doctor.specialty,
  //       user: {
  //         name: appointment.Doctor.user.name,
  //         email: appointment.Doctor.user.email,
  //         city: appointment.Doctor.user.city,
  //         neigbhod: appointment.Doctor.user.neigbhod,
  //         addressComplement: appointment.Doctor.user.addressComplement,
  //         municipality: appointment.Doctor.user.municipality,
  //       },
  //     },
  //     institution: {
  //       id: appointment.institution.id,
  //       createdAt: appointment.institution.createdAt,
  //       updatedAt: appointment.institution.updatedAt,
  //       user: {
  //         name: appointment.Doctor.user.name,
  //         email: appointment.Doctor.user.email,
  //         city: appointment.Doctor.user.city,
  //         neigbhod: appointment.Doctor.user.neigbhod,
  //         addressComplement: appointment.Doctor.user.addressComplement,
  //         municipality: appointment.Doctor.user.municipality,
  //       },
  //     },
  //   };

  //   return appointments;
  // }

  async findById(id: string): Promise<ResponseAllAppointPatient> {
    const appointment = await this.prisma.appointment.findUnique({
      where: { id: id },
      include: {
        medicalReport: true,
        Rating: true,
        consultationType: {
          select: {
            id: true,
            name: true,
          },
        },
        pacient: {
          select: {
            id: true,
            user: true,
          },
        },
        Doctor: {
          select: {
            id: true,
            bio: true,
            specialty: true,
            isOnVacation: true,
            user: true,
          },
        },
        institution: {
          select: {
            id: true,
            user: true,
            createdAt: true,
            updatedAt: true,
          },
        },
      },
    });

    const isReported =
      appointment.medicalReport && appointment.medicalReport.length > 0
        ? true
        : false;
    const isRated =
      appointment.Rating && appointment.Rating.length > 0 ? true : false;

    const appointments: ResponseAllAppointPatient = {
      isRated: isRated,
      isReported: isReported,
      medicalReportId: appointment.medicalReport.map((e) => e.id),
      description: appointment.symptomDescription,
      id: appointment.id,
      isUrgent: appointment.isUrgent,
      date: new Date(appointment.date),
      status: appointment.status,
      symptomDescription: appointment.symptomDescription,
      createdAt: appointment.createdAt,
      updatedAt: appointment.updatedAt,
      consultationType: appointment.consultationType.name,
      pacient: {
        id: appointment.pacient.id,
        name: appointment.pacient.user.name,
        email: appointment.pacient.user.email,
        city: appointment.pacient.user.city,
        neigbhod: appointment.pacient.user.neigbhod,
        addressComplement: appointment.pacient.user.addressComplement,
        municipality: appointment.pacient.user.municipality,
        phone: appointment.pacient.user.phone,
        birthday: appointment.pacient.user.birthday,
        gender: appointment.pacient.user.gender,
        FatherName: appointment.pacient.user.FatherName,
        MotherName: appointment.pacient.user.MotherName,
      },
      doctor: {
        id: appointment.Doctor.id,
        bio: appointment.Doctor.bio,
        isOnVacation: appointment.Doctor.isOnVacation,
        specialty: appointment.Doctor.specialty,
        user: {
          name: appointment.Doctor.user.name,
          email: appointment.Doctor.user.email,
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
          name: appointment.institution.user?.name || '',
          email: appointment.institution.user?.email || '',
          city: appointment.institution.user?.city || '',
          neigbhod: appointment.institution.user?.neigbhod || '',
          addressComplement:
            appointment.institution.user?.addressComplement || '',
          municipality: appointment.institution.user?.municipality || '',
        },
      },
    };

    return appointments;
  }

  async update(
    id: string,
    doctor: UpdateAppointmentInput,
  ): Promise<Appointments> {
    return await this.prisma.appointment.update({
      where: { id: id },
      data: doctor,
    });
  }

  async create(input: CreateAppointInput): Promise<Appointments> {
    return await this.prisma.appointment.create({
      data: input,
    });
  }

  async remove({ id }: { id: string }): Promise<void> {
    await this.prisma.appointment.delete({ where: { id: id } });
  }

  async findAll(): Promise<Appointments[]> {
    return await this.prisma.appointment.findMany();
  }

  public async findByDate(
    date: Date,
    doctorId: string,
  ): Promise<Appointments | undefined> {
    const findAppointment = await this.prisma.appointment.findFirst({
      where: { date, doctorId },
    });

    return findAppointment;
  }

  public async findAllInDayFromProvider({
    doctorId,
    day,
    month,
    year,
  }: IFindAllInDayFromProvider): Promise<Appointments[]> {
    const parsedDay = String(day).padStart(2, '0');
    const parsedMonth = String(month).padStart(2, '0');

    const appointments = await this.prisma.appointment.findMany({
      where: {
        doctorId,
        date: {
          equals: new Date(`${year}-${parsedMonth}-${parsedDay}`),
        },
      },
      include: {
        Doctor: true,
      },
    });

    return appointments;
  }

  public async findAllInMonthFromProvider({
    doctorId,
    month,
    year,
  }: IFindAllInDayFromProvider): Promise<Appointments[]> {
    const parsedMonth = String(month).padStart(2, '0');

    const appointments = await this.prisma.appointment.findMany({
      where: {
        doctorId,
        date: {
          equals: new Date(`${year}-${parsedMonth}-01`),
          lte: new Date(`${year}-${parsedMonth + 1}-01`),
        },
      },
    });

    return appointments;
  }

  // async findAppoitmentByPatientId(patientId: string): Promise<Appointments[]> {
  //   const appointments = this.prisma.appointment.findMany({
  //     where: {
  //       patientId: patientId,
  //     },
  //   });

  //   return appointments;
  // }

  async findAppoitmentByPatientId(
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

  async findAppoitmentByDoctorId(
    id: string,
  ): Promise<ResponseAllAppointPatient[]> {
    try {
      const appointmentsData = await this.prisma.appointment.findMany({
        where: { doctorId: id },
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
              city: appointment.Doctor.user.city,
              neigbhod: appointment.Doctor.user.neigbhod,
              addressComplement: appointment.Doctor.user.addressComplement,
              municipality: appointment.Doctor.user.municipality,
            },
          },
          institution: {
            id: appointment.id,
            createdAt: appointment.institution.createdAt,
            updatedAt: appointment.institution.updatedAt,
            user: {
              id: appointment.institution.id,
              name: appointment.institution.user.name,
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
  async findAppoitmentByclinicId(
    id: string,
  ): Promise<ResponseAllAppointPatient[]> {
    try {
      const appointmentsData = await this.prisma.appointment.findMany({
        where: { institutionId: id },
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
}
