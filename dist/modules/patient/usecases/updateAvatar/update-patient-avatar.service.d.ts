import { IPatientRepository } from '../../repository/interface/IPatientRepository';
import { Patients } from '../../entities/patient.entity';
import { IStorageProvider } from 'src/utils/shared/providers/storageProviders/interfaces/IstorageProvider';
import { FileDTO } from 'src/modules/upload/dtos/upload-file.input';
export declare class UpdatePatientAvatarService {
    private readonly patientRepo;
    private readonly storageProviderRepo;
    constructor(patientRepo: IPatientRepository, storageProviderRepo: IStorageProvider);
    execute(patientId: string, data: FileDTO): Promise<Patients>;
    getPatientID(patientId: string): Promise<import("../../dtos/reponsePatientOutput").ResponseUser>;
}
