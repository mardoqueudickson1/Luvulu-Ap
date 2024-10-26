import { messages } from 'src/utils/shared/errorsMessages';

import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { IAppointmentRepository } from '../../repository/interface/IAppointmentRepository';
import { ResponseAllAppointPatient } from '../../dtos/responseAllAppointments';

@Injectable()
export class FindAppointmentByPatientIdService {
  constructor(private readonly appointmentRepo: IAppointmentRepository) {}

  async execute(patientId: string): Promise<ResponseAllAppointPatient[]> {
    try {
      const { appointment } = await this.appointmentRepo.findUser(patientId);

      if (!appointment.id) {
        throw new NotFoundException(messages.patientNotFound);
      }

      const appointments = await this.appointmentRepo.findAppoitmentByPatientId(
        appointment.id,
      );

      if (!appointments) {
        throw new NotFoundException('Nenhum agendamento encontrado');
      }

      return appointments;
    } catch (error) {
      throw new InternalServerErrorException(messages.errorPatientAppointment);
    }
  }
}
