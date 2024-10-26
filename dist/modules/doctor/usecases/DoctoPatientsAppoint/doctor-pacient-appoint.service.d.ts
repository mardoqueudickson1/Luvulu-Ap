import { ResponseAllAppointPatient } from 'src/modules/appointments/dtos/responseAllAppointments';
import { IDoctorRepository } from '../../repository/interface/IDoctorRepository';
export declare class getDoctorAppointmentsPatientsService {
    private readonly doctorRepo;
    constructor(doctorRepo: IDoctorRepository);
    findAll(id: string): Promise<ResponseAllAppointPatient[]>;
}
