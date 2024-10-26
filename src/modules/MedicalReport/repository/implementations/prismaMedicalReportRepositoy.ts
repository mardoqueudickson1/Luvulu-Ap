import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';
import { IMedicalReportRepository } from '../interface/IMediclaReportRepository';
import { CreateMedicalReportInput } from '../../dtos/create-medical-report.input';
import { MedicalReportResponse } from '../../dtos/medical-report-response';
import { MedicalReports } from '../../entities/medical-report.entity';
import { AppointmentType } from 'src/modules/appointments/dtos/appointment.types';
import { messages } from 'src/utils/shared/errorsMessages';

@Injectable()
export class PrismaMedicalReportRepositoy implements IMedicalReportRepository {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateMedicalReportInput): Promise<MedicalReports> {
    try {
      return await this.prisma.medicalReport.create({ data });
    } catch (error) {}
  }
  async findOne(id: string): Promise<MedicalReportResponse> {
    const data = await this.prisma.medicalReport.findFirst({
      where: { id: id },
      select: {
        id: true,
        diagnosis: true,
        bloodPressure: true,
        date: true,
        height: true,
        weight: true,
        pulse: true,
        otherPhysicalParams: true,
        symptomsDescription: true,
        temperature: true,
        observations: true,
        orientations: true,
        treatmentPlan: true,
        recommendations: true,
        medicalEvaluation: true,
        additionalObservation: true,
        appointment: {
          select: {
            id: true,
            consultationType: {
              select: {
                name: true,
              },
            },
            isUrgent: true,
            institution: {
              select: {
                id: true,
                user: true,
              },
            },
            Doctor: {
              select: {
                id: true,
                user: true,
              },
            },
            pacient: {
              select: {
                id: true,
                user: true,
              },
            },
          },
        },
      },
    });
    console.log(data.appointment.isUrgent);

    const result: MedicalReportResponse = {
      doctor: {
        id: data.appointment.Doctor.id,
        name: data.appointment.Doctor.user.name,
        birthday: data.appointment.Doctor.user.birthday,
        city: data.appointment.Doctor.user.city,
        email: data.appointment.Doctor.user.email,
        gender: data.appointment.Doctor.user.gender,
        municipality: data.appointment.Doctor.user.municipality,
        nationality: data.appointment.Doctor.user.nationality,
        neigbhod: data.appointment.Doctor.user.neigbhod,
        phone: data.appointment.Doctor.user.phone,
      },
      institution: {
        id: data.appointment.institution.id,
        name: data.appointment.institution.user.name,
        birthday: data.appointment.institution.user.birthday,
        city: data.appointment.institution.user.city,
        email: data.appointment.institution.user.email,
        gender: data.appointment.institution.user.gender,
        municipality: data.appointment.institution.user.municipality,
        nationality: data.appointment.institution.user.nationality,
        neigbhod: data.appointment.institution.user.neigbhod,
        phone: data.appointment.institution.user.phone,
      },
      pacient: {
        id: data.appointment.pacient.id,
        name: data.appointment.pacient.user.name,
        birthday: data.appointment.pacient.user.birthday,
        city: data.appointment.pacient.user.city,
        email: data.appointment.pacient.user.email,
        gender: data.appointment.pacient.user.gender,
        municipality: data.appointment.pacient.user.municipality,
        nationality: data.appointment.pacient.user.nationality,
        neigbhod: data.appointment.pacient.user.neigbhod,
        phone: data.appointment.pacient.user.phone,
        FatherName: data.appointment.pacient.user.MotherName,
        MotherName: data.appointment.pacient.user.MotherName,
      },
      id: data.id,
      diagnosis: data.diagnosis || null,
      date: data.date,
      isUrgent: data.appointment.isUrgent,
      height: data.height || null,
      otherPhysicalParams: data.otherPhysicalParams || null,
      orientations: data.orientations || null,
      observations: data.observations || null,
      recommendations: data.recommendations || null,
      weight: data.weight || null,
      specialtyArea: data.appointment.consultationType.name || null,
      pulse: data.pulse || null,
      symptomsDescription: data.symptomsDescription || null,
      treatmentPlan: data.treatmentPlan || null,
      bloodPressure: data.bloodPressure || null,
      temperature: data.temperature || null,
      medicalEvaluation: data.medicalEvaluation || null,
      additionalObservation: data.weight || null,
    };
    return result;
  }

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

  async alreadyExist(id: string): Promise<MedicalReports> {
    return this.prisma.medicalReport.findFirst({
      where: { AppointmentId: id },
    });
  }
}
