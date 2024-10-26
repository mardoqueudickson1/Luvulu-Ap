import { ListAllDoctorService } from '../../usecases/listAll/listaAll-doctor.service';
import { ResponseAllDoctor } from '../../dtos/response-all-doctor';
export declare class ListAlldoctorResolver {
    private readonly doctorService;
    constructor(doctorService: ListAllDoctorService);
    findAllDoctor(): Promise<ResponseAllDoctor[]>;
}
