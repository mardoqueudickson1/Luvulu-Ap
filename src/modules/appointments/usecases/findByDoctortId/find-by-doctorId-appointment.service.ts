import { messages } from 'src/utils/shared/errorsMessages';

import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { IAppointmentRepository } from '../../repository/interface/IAppointmentRepository';
import { ResponseAllAppointPatient } from '../../dtos/responseAllAppointments';

@Injectable()
export class FindAppointmentBydoctorIdService {
  constructor(private readonly appointmentRepo: IAppointmentRepository) {}

  async execute(id: string): Promise<ResponseAllAppointPatient[]> {
    try {
      const { doctor } = await this.appointmentRepo.findUser(id);

      if (!doctor.id) {
        throw new NotFoundException(messages.doctorNotFound);
      }

      const appointments = await this.appointmentRepo.findAppoitmentByDoctorId(
        doctor.id,
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
