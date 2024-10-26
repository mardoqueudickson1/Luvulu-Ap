import { InstitutionIResponse } from '../../dtos/response-all-doctor';
import { listClinicOfDoctorService } from '../../usecases/findClinicOfDoctor/list-all-clinic-OfDoctor.service';
export declare class listClinicOfDoctorResolver {
    private readonly doctorService;
    constructor(doctorService: listClinicOfDoctorService);
    findAllClinicOfDoctor(doctor_id: string): Promise<InstitutionIResponse[]>;
}
