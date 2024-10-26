import { FindOneDoctorService } from '../../usecases/findOne/findOne-doctor.service';
import { ResponseDoctor } from '../../dtos/response-doctor';
export declare class FindOneDoctorResolver {
    private readonly doctorService;
    constructor(doctorService: FindOneDoctorService);
    findOneDoctor(id: string): Promise<ResponseDoctor>;
}
