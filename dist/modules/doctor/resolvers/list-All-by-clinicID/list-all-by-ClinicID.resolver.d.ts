import { ListAllDoctorByclinicIDService } from '../../usecases/list-All-by-clinicID/list-All-by-clinicID.service';
import { ResponseAllDoctor } from '../../dtos/response-all-doctor';
export declare class ListAllDoctorByclinicIDResolver {
    private readonly doctorService;
    constructor(doctorService: ListAllDoctorByclinicIDService);
    findAllDoctorsByClinicID(user: any): Promise<ResponseAllDoctor[]>;
}
