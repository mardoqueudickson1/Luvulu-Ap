import { UpdatePatientAvatarService } from 'src/modules/patient/usecases/updateAvatar/update-patient-avatar.service';
import { FileDTO } from 'src/modules/upload/dtos/upload-file.input';
import { Patients } from 'src/modules/patient/entities/patient.entity';
export declare class UpdateAvatarPatientResolver {
    private readonly updatePatientAvatarService;
    constructor(updatePatientAvatarService: UpdatePatientAvatarService);
    updatePatientAvatar(file: FileDTO, user: any): Promise<Patients>;
}
