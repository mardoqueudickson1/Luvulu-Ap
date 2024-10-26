import { RemoveDoctorService } from '../../usecases/remove/remove-doctor.service';
export declare class RemoveDoctorResolver {
    private readonly patientService;
    constructor(patientService: RemoveDoctorService);
    removeDoctor(id: string): Promise<void>;
}
