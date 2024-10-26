import { messages } from 'src/utils/shared/errorsMessages';

import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { IAppointmentRepository } from '../../repository/interface/IAppointmentRepository';
import { ResponseAllAppointPatient } from '../../dtos/responseAllAppointments';

@Injectable()
export class FindAppointmentByclinicIdService {
  constructor(private readonly appointmentRepo: IAppointmentRepository) {}

  async execute(id: string): Promise<ResponseAllAppointPatient[]> {
    try {
      const { institution } = await this.appointmentRepo.findUser(id);

      if (!institution.id) {
        throw new NotFoundException(messages.clinicNotFound);
      }

      const appointments = await this.appointmentRepo.findAppoitmentByclinicId(
        institution.id,
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
