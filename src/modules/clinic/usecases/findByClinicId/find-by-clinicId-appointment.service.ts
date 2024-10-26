import { messages } from 'src/utils/shared/errorsMessages';

import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';

import { IClinicRepository } from '../../repository/interface/IClinicRepository';
import { ResponseAllAppointClinic } from '../../dtos/responseAllAppointmentByClinic';

@Injectable()
export class FindAppointmentByClinicIdService {
  constructor(private readonly institionRepo: IClinicRepository) {}

  async execute(clinicId: string): Promise<ResponseAllAppointClinic[]> {
    try {
      const { instition } = await this.institionRepo.findUserClinicId(clinicId);

      if (!instition.id) {
        throw new NotFoundException(messages.patientNotFound);
      }

      const appointments = await this.institionRepo.findAppoitmentByClinicId(
        instition.id,
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
