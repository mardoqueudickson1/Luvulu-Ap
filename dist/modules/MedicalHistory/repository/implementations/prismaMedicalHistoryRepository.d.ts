import { PrismaService } from '../../../prisma/prisma.service';
import { CreateMedicalHistoryInput } from '../../dtos/create-medical-history.input';
import { IMedicalHistoryRepository } from '../interface/IMedicalHistoryRepository';
import { MedicalHistoryEntity } from '../../entities/medical-history.entity';
import { GetMedicalHsitoryByPatientIdOutput } from '../../dtos/get-medical-history-byPatientId-output';
export declare class PrismaMedicalHistoryRepositoy implements IMedicalHistoryRepository {
    private prisma;
    constructor(prisma: PrismaService);
    create(medicalHistoryInput: CreateMedicalHistoryInput): Promise<MedicalHistoryEntity>;
    findById(id: string): Promise<MedicalHistoryEntity>;
    remove({ id }: {
        id: string;
    }): Promise<void>;
    getMedicalHistoryByPatientId(patientId: string): Promise<GetMedicalHsitoryByPatientIdOutput[]>;
    getMedicalHistoriesByDoctorId(doctorId: string): Promise<MedicalHistoryEntity[]>;
    getMedicalHistoriesByAppointmentId(appointmentId: string): Promise<MedicalHistoryEntity[]>;
}
