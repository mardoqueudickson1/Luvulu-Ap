import { CreatePatientInput } from '../../dtos/create-patient.input';
import { IPatientRepository } from '../../repository/interface/IPatientRepository';
import { IUserRepository } from '../../../user/repository/interface/IUserRepository';
import { SendMailService } from 'src/utils/services/emailService';
import { IQRCodeRepository } from 'src/modules/qr-code/repository/interface/IQRCodeRepository';
export declare class CreatePatientService {
    private readonly patientRepo;
    private userRepo;
    private readonly emailService;
    private QrCodeRepo;
    constructor(patientRepo: IPatientRepository, userRepo: IUserRepository, emailService: SendMailService, QrCodeRepo: IQRCodeRepository);
    create(createPatientInput: CreatePatientInput): Promise<import("../../entities/patient.entity").Patients>;
}
