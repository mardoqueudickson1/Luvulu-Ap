import { getDoctorAppointmentsPatientsService } from '../../usecases/DoctoPatientsAppoint/doctor-pacient-appoint.service';
import { ResponseAllAppointPatient } from 'src/modules/appointments/dtos/responseAllAppointments';
export declare class getDoctorAppointmentsPatientsResolver {
    private readonly repo;
    constructor(repo: getDoctorAppointmentsPatientsService);
    getDoctorAppointmentsPatients(user: any): Promise<ResponseAllAppointPatient[]>;
}
