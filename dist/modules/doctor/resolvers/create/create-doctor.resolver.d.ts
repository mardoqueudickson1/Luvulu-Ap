import { CreateDoctorInput, CreateDoctorPartial } from '../../dtos/create-doctor.input';
import { Doctors } from '../../entities/doctor.entity';
import { CreateDoctorService } from '../../usecases/create/create-doctor.service';
import { Users } from 'src/modules/user/entities/user';
export declare class CreateDoctorResolver {
    private readonly doctorService;
    constructor(doctorService: CreateDoctorService);
    createDoctor(user: Users, createdoctorInput: CreateDoctorInput, createPartial: CreateDoctorPartial): Promise<Doctors>;
}
