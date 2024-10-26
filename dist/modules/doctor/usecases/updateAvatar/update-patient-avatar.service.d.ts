import { Patients } from 'src/modules/patient/entities/patient.entity';
import { IPatientRepository } from 'src/modules/patient/repository/interface/IPatientRepository';
import { FileDTO } from 'src/modules/upload/dtos/upload-file.input';
import { IStorageProvider } from 'src/utils/shared/providers/storageProviders/interfaces/IstorageProvider';
export declare class UpdatePatientAvatarService {
    private readonly patientRepo;
    private readonly storageProviderRepo;
    constructor(patientRepo: IPatientRepository, storageProviderRepo: IStorageProvider);
    execute(patientId: string, data: FileDTO): Promise<Patients>;
    getPatientID(patientId: string): Promise<import("../../../patient/dtos/reponsePatientOutput").ResponseUser>;
}
