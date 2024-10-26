import { ResponseAllAppointPatient } from 'src/modules/appointments/dtos/responseAllAppointments';
import { IDoctorRepository } from '../../repository/interface/IDoctorRepository';
import { Injectable } from '@nestjs/common';
import { findSupabaseFileService } from 'src/utils/shared/providers/storageProviders/implementations/supaBase/findPhotoFile';

@Injectable()
export class getDoctorAppointmentsPatientsService {
  constructor(private readonly doctorRepo: IDoctorRepository) {}

  async findAll(id: string): Promise<ResponseAllAppointPatient[]> {
    const { Doctor } = await this.doctorRepo.findUser(id);
    const result = await this.doctorRepo.getDoctorAppointmentsPatients(
      Doctor.id,
    );

    for (const data of result) {
      if (data.pacient.avatar !== null) {
        const url = await findSupabaseFileService.getPhotoUrl(
          data.pacient.avatar,
        );
        data.pacient.avatar = url.toString();
      }
    }

    return result;
  }
}
