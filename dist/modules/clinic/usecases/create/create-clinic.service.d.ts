import { CreateClinicInput } from '../../dtos/create-clinic.input';
import { IClinicRepository } from '../../repository/interface/IClinicRepository';
import { IUserRepository } from '../../../user/repository/interface/IUserRepository';
import { SendMailService } from 'src/utils/services/emailService';
export declare class CreateClinicService {
    private readonly clinicRepo;
    private userRepo;
    private readonly emailService;
    constructor(clinicRepo: IClinicRepository, userRepo: IUserRepository, emailService: SendMailService);
    create(createClinicDTO: CreateClinicInput): Promise<import("../../entities/clinic").Clinics>;
}
