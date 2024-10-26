import { Appointments } from '../../entities/appointments.entity';
import { IAppointmentRepository } from '../../repository/interface/IAppointmentRepository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ListAllAppointmentService {
  constructor(private readonly appointmentRepo: IAppointmentRepository) {}

  async listAll(): Promise<Appointments[]> {
    const appointments = await this.appointmentRepo.findAll();
    return appointments;
  }
}
