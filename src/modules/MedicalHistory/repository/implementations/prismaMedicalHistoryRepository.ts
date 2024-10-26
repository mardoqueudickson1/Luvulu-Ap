import { PrismaService } from '../../../prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateMedicalHistoryInput } from '../../dtos/create-medical-history.input';
import { IMedicalHistoryRepository } from '../interface/IMedicalHistoryRepository';
import { MedicalHistoryEntity } from '../../entities/medical-history.entity';
import { GetMedicalHsitoryByPatientIdOutput } from '../../dtos/get-medical-history-byPatientId-output';

@Injectable()
export class PrismaMedicalHistoryRepositoy
  implements IMedicalHistoryRepository
{
  constructor(private prisma: PrismaService) {}

  async create(
    medicalHistoryInput: CreateMedicalHistoryInput,
  ): Promise<MedicalHistoryEntity> {
    const medicalHistory = await this.prisma.medicalHistory.create({
      data: {
        AppointmentId: medicalHistoryInput.appointmentId,
      },
    });

    return medicalHistory;
  }

  async findById(id: string): Promise<MedicalHistoryEntity> {
    const medicalHistory = await this.prisma.medicalHistory.findUnique({
      where: { id: id },
    });

    return medicalHistory;
  }

  async remove({ id }: { id: string }): Promise<void> {
    await this.prisma.medicalHistory.delete({ where: { id: id } });
  }

  async getMedicalHistoryByPatientId(
    patientId: string,
  ): Promise<GetMedicalHsitoryByPatientIdOutput[]> {
    const medicalHistoryData = await this.prisma.medicalHistory.findMany({
      where: {
        Appointment: {
          patientId: patientId,
        },
      },
      select: {
        id: true,
        AppointmentId: true,
        Appointment: {
          select: {
            Doctor: {
              select: {
                user: true,
              },
            },
            id: true,
            patientId: true,
            institutionId: true,
            consultationTypeId: true,
            doctorId: true,
            symptomDescription: true,
            isUrgent: true,
            date: true,
            status: true,
            createdAt: true,
            updatedAt: true,
            deletedAt: true,
          },
        },
      },
    });

    const medicalHistory: GetMedicalHsitoryByPatientIdOutput[] =
      medicalHistoryData.map((history) => {
        // if(history.Appointment.Doctor.user.avatar)
        return {
          id: history.id,
          doctor: history.Appointment.Doctor.user,
          appointmentId: history.AppointmentId,
          appointment: {
            id: history.Appointment.id,
            patientId: history.Appointment.patientId,
            institutionId: history.Appointment.institutionId,
            consultationTypeId: history.Appointment.consultationTypeId,
            doctorId: history.Appointment.doctorId,
            symptomDescription: history.Appointment.symptomDescription,
            isUrgent: history.Appointment.isUrgent,
            date: history.Appointment.date,
            status: history.Appointment.status,
            createdAt: history.Appointment.createdAt,
            updatedAt: history.Appointment.updatedAt,
            deletedAt: history.Appointment.deletedAt,
          },
        };
      });
    return medicalHistory;
  }

  async getMedicalHistoriesByDoctorId(
    doctorId: string,
  ): Promise<MedicalHistoryEntity[]> {
    const medicalHistory = await this.prisma.medicalHistory.findMany({
      where: {
        Appointment: {
          doctorId: doctorId,
        },
      },
      include: {
        Appointment: true,
      },
    });

    return medicalHistory;
  }

  async getMedicalHistoriesByAppointmentId(
    appointmentId: string,
  ): Promise<MedicalHistoryEntity[]> {
    const medicalHistory = await this.prisma.medicalHistory.findMany({
      where: {
        Appointment: {
          id: appointmentId,
        },
      },
    });

    return medicalHistory;
  }
}
