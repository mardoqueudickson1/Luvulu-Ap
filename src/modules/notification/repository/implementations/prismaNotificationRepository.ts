import { PrismaService } from '../../../prisma/prisma.service';
import { Injectable } from '@nestjs/common';

import { INotificationRepository } from '../interface/INotificaionRepository';
import { CreateNotificationInput } from '../../dtos/create-notification.input';
import { Notifications } from '../../entities/notification.entity';
import { NotificationResponse } from '../../dtos/notificationResponse';
import { UpdateNotificationInput } from '../../dtos/update-notification.input';
import {
  ResponseDoctorOutput,
  ResponseInstitution,
  ResponsePatientLoggedOutput,
} from '../../dtos/notificationTypeoutput';

@Injectable()
export class PrismaNotificationsRepositoy implements INotificationRepository {
  constructor(private prisma: PrismaService) {}

  async create(
    notificationInput: CreateNotificationInput,
  ): Promise<Notifications> {
    const notification = await this.prisma.notification.create({
      data: notificationInput,
    });

    return notification;
  }

  async findById(id: string): Promise<Notifications> {
    const notification = await this.prisma.notification.findUnique({
      where: { id: id },
    });

    return notification;
  }

  async remove({ id }: { id: string }): Promise<void> {
    await this.prisma.notification.delete({ where: { id: id } });
  }

  async findClinicByUserId(id: string): Promise<ResponseInstitution> {
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

    const result: ResponseInstitution = {
      institution: user.Institution[0],
    };
    return result;
  }

  async findDoctorUserId(id: string): Promise<ResponseDoctorOutput> {
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
      },
    });

    const result: ResponseDoctorOutput = {
      doctor: user.Doctor[0],
    };
    return result;
  }

  async findPatientByUserId(id: string): Promise<ResponsePatientLoggedOutput> {
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

    const result: ResponsePatientLoggedOutput = {
      patientId: user.Patient[0],
    };
    return result;
  }

  async update(
    id: string,
    notification: UpdateNotificationInput,
  ): Promise<Notifications> {
    return await this.prisma.notification.update({
      where: { id: id },
      data: notification,
    });
  }

  async findAllNotificationPatientId(
    patientId: string,
  ): Promise<NotificationResponse[]> {
    const notifications = await this.prisma.notification.findMany({
      where: { patient_id: patientId },
      include: {
        Patient: {
          include: {
            user: true,
          },
        },
        Doctor: {
          include: { user: true },
        },
        Institution: { include: { user: true } },
      },
    });

    const result: NotificationResponse[] = notifications.map((e) => ({
      id: e.id,
      content: e.content,
      read: e.read,
      doctors: {
        id: e.Doctor.id,
        name: e.Doctor.user.name,
        avatar: e.Doctor.user.avatar,
        city: e.Doctor.user.city,
        email: e.Doctor.user.email,
        FatherName: e.Doctor.user.FatherName,
        MotherName: e.Doctor.user.MotherName,
        municipality: e.Doctor.user.municipality,
        nationality: e.Doctor.user.nationality,
        neigbhod: e.Doctor.user.neigbhod,
        nif: e.Doctor.user.nif,
      },
      institutions: {
        id: e.Institution.id,
        name: e.Institution.user.name,
        avatar: e.Institution.user.avatar,
        city: e.Institution.user.city,
        email: e.Institution.user.email,
        FatherName: e.Institution.user.FatherName,
        MotherName: e.Institution.user.MotherName,
        municipality: e.Institution.user.municipality,
        nationality: e.Institution.user.nationality,
        neigbhod: e.Institution.user.neigbhod,
        nif: e.Institution.user.nif,
      },
      patient: {
        id: e.Patient.id,
        name: e.Patient.user.name,
        avatar: e.Patient.user.avatar,
        city: e.Patient.user.city,
        email: e.Patient.user.email,
        FatherName: e.Patient.user.FatherName,
        MotherName: e.Patient.user.MotherName,
        municipality: e.Patient.user.municipality,
        nationality: e.Patient.user.nationality,
        neigbhod: e.Patient.user.neigbhod,
        nif: e.Patient.user.nif,
      },
      doctor_id: e.doctor_id,
      institution_id: e.institution_id,
      patient_id: e.patient_id,
      updatedAt: e.updatedAt,
      createdAt: e.createdAt,
      deletedAt: e.deletedAt,
    }));

    return result;
  }
  async findAllNotificationDoctorId(
    doctorId: string,
  ): Promise<NotificationResponse[]> {
    const notifications = await this.prisma.notification.findMany({
      where: { doctor_id: doctorId },
      include: {
        Patient: {
          include: {
            user: true,
          },
        },
        Doctor: {
          include: {
            user: true,
          },
        },

        Institution: { include: { user: true } },
      },
    });

    const result: NotificationResponse[] = notifications.map((e) => ({
      id: e.id,
      content: e.content,
      read: e.read,
      doctors: {
        id: e.Doctor.id,
        name: e.Doctor.user.name,
        avatar: e.Doctor.user.avatar,
        city: e.Doctor.user.city,
        email: e.Doctor.user.email,
        FatherName: e.Doctor.user.FatherName,
        MotherName: e.Doctor.user.MotherName,
        municipality: e.Doctor.user.municipality,
        nationality: e.Doctor.user.nationality,
        neigbhod: e.Doctor.user.neigbhod,
        nif: e.Doctor.user.nif,
      },
      institutions: {
        id: e.Institution.id,
        name: e.Institution.user.name,
        avatar: e.Institution.user.avatar,
        city: e.Institution.user.city,
        email: e.Institution.user.email,
        FatherName: e.Institution.user.FatherName,
        MotherName: e.Institution.user.MotherName,
        municipality: e.Institution.user.municipality,
        nationality: e.Institution.user.nationality,
        neigbhod: e.Institution.user.neigbhod,
        nif: e.Institution.user.nif,
      },
      patient: {
        id: e.Patient.id,
        name: e.Patient.user.name,
        avatar: e.Patient.user.avatar,
        city: e.Patient.user.city,
        email: e.Patient.user.email,
        FatherName: e.Patient.user.FatherName,
        MotherName: e.Patient.user.MotherName,
        municipality: e.Patient.user.municipality,
        nationality: e.Patient.user.nationality,
        neigbhod: e.Patient.user.neigbhod,
        nif: e.Patient.user.nif,
      },
      doctor_id: e.doctor_id,
      institution_id: e.institution_id,
      patient_id: e.patient_id,
      updatedAt: e.updatedAt,
      createdAt: e.createdAt,
      deletedAt: e.deletedAt,
    }));

    return result;
  }

  async findAllNotificationClinicId(
    clinicId: string,
  ): Promise<NotificationResponse[]> {
    const notifications = await this.prisma.notification.findMany({
      where: { institution_id: clinicId },
      include: {
        Patient: {
          include: {
            user: true,
          },
        },
        Doctor: {
          include: {
            user: true,
          },
        },

        Institution: { include: { user: true } },
      },
    });

    const result: NotificationResponse[] = notifications.map((e) => ({
      id: e.id,
      content: e.content,
      read: e.read,
      doctors: {
        id: e.Doctor.id,
        name: e.Doctor.user.name,
        avatar: e.Doctor.user.avatar,
        city: e.Doctor.user.city,
        email: e.Doctor.user.email,
        FatherName: e.Doctor.user.FatherName,
        MotherName: e.Doctor.user.MotherName,
        municipality: e.Doctor.user.municipality,
        nationality: e.Doctor.user.nationality,
        neigbhod: e.Doctor.user.neigbhod,
        nif: e.Doctor.user.nif,
      },
      institutions: {
        id: e.Institution.id,
        name: e.Institution.user.name,
        avatar: e.Institution.user.avatar,
        city: e.Institution.user.city,
        email: e.Institution.user.email,
        FatherName: e.Institution.user.FatherName,
        MotherName: e.Institution.user.MotherName,
        municipality: e.Institution.user.municipality,
        nationality: e.Institution.user.nationality,
        neigbhod: e.Institution.user.neigbhod,
        nif: e.Institution.user.nif,
      },
      patient: {
        id: e.Patient.id,
        name: e.Patient.user.name,
        avatar: e.Patient.user.avatar,
        city: e.Patient.user.city,
        email: e.Patient.user.email,
        FatherName: e.Patient.user.FatherName,
        MotherName: e.Patient.user.MotherName,
        municipality: e.Patient.user.municipality,
        nationality: e.Patient.user.nationality,
        neigbhod: e.Patient.user.neigbhod,
        nif: e.Patient.user.nif,
      },
      doctor_id: e.doctor_id,
      institution_id: e.institution_id,
      patient_id: e.patient_id,
      updatedAt: e.updatedAt,
      createdAt: e.createdAt,
      deletedAt: e.deletedAt,
    }));

    return result;
  }
}
