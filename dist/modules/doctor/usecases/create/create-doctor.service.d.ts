import { CreateDoctorInput, CreateDoctorPartial } from '../../dtos/create-doctor.input';
import { IDoctorRepository } from '../../repository/interface/IDoctorRepository';
import { IUserRepository } from '../../../user/repository/interface/IUserRepository';
import { SendMailService } from 'src/utils/services/emailService';
export declare class CreateDoctorService {
    private readonly doctorRepo;
    private userRepo;
    private readonly emailService;
    constructor(doctorRepo: IDoctorRepository, userRepo: IUserRepository, emailService: SendMailService);
    create(createDoctorInput: CreateDoctorInput, createPartial: CreateDoctorPartial): Promise<import("../../entities/doctor.entity").Doctors>;
}
