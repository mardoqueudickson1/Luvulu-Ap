import { Injectable } from '@nestjs/common';
import { AppointmentStatus } from '@prisma/client';
import { Appointments } from 'src/modules/appointments/entities/appointments.entity';
import { INotificationRepository } from 'src/modules/notification/repository/interface/INotificaionRepository';
import { IAppointmentRepository } from 'src/modules/appointments/repository/interface/IAppointmentRepository';
import { IPatientRepository } from '../../repository/interface/IPatientRepository';

@Injectable()
export class PatientCancelAppointmentService {
  constructor(
    private repo: IPatientRepository,
    private readonly notificationRepo: INotificationRepository,
    private readonly appoitmantRepo: IAppointmentRepository,
  ) {}

  async changeStatus(appointmantId: string): Promise<Appointments> {
    try {
      const appointment = await this.repo.changeAppointmentStatus(
        appointmantId,
        AppointmentStatus.CANCELED,
      );
      const getAppointment = await this.appoitmantRepo.findById(appointmantId);

      await this.notificationRepo.create({
        content: `O paciente ${getAppointment.pacient.name} fez o cancelamento de sua consulta`,
        read: false,
        doctor_id: getAppointment.doctorId,
      });

      await this.notificationRepo.create({
        content: `O paciente ${getAppointment.pacient.name} fez o cancelamento de sua consulta`,
        read: false,
        institution_id: getAppointment.institutionId,
      });
      return appointment;
    } catch (error) {
      throw error;
    }
  }
}
