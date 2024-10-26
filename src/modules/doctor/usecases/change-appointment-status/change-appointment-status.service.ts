import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { IDoctorRepository } from '../../repository/interface/IDoctorRepository';
import { AppointmentStatus } from '@prisma/client';
import { Appointments } from 'src/modules/appointments/entities/appointments.entity';
import { INotificationRepository } from 'src/modules/notification/repository/interface/INotificaionRepository';
import { IAppointmentRepository } from 'src/modules/appointments/repository/interface/IAppointmentRepository';
import { messages } from 'src/utils/shared/errorsMessages';

@Injectable()
export class ChangeAppointmentStatusService {
  constructor(
    private readonly repo: IDoctorRepository,
    private readonly notificationRepo: INotificationRepository,
    private readonly appoitmantRepo: IAppointmentRepository,
  ) {}

  async changeStatus(
    appointmantId: string,
    status: AppointmentStatus,
  ): Promise<Appointments> {
    try {
      const appointment = await this.repo.changeAppointmentStatus(
        appointmantId,
        status,
      );
      const getAppointment = await this.appoitmantRepo.findById(appointmantId);

      await this.notificationRepo.create({
        content: `O status da sua consulta foi alterado para ${appointment.status}!`,
        read: false,
        patient_id: getAppointment.pacient.id,
      });
      return appointment;
    } catch (error) {
      throw new InternalServerErrorException(messages.errorServer);
    }
  }
}
