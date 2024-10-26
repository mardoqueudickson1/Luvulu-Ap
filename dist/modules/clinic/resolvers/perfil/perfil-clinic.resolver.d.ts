import { ProfileClinicOutput } from '../../dtos/profile-clinic.output';
import { ProfileClinicService } from '../../usecases/profile/perfil-clinic.service';
export declare class ProfileClinicResolver {
    private readonly profileClinic;
    constructor(profileClinic: ProfileClinicService);
    ProfileClinic(user: any): Promise<ProfileClinicOutput>;
}
