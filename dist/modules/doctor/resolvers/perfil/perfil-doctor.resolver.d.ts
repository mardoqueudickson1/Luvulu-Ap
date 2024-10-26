import { UserProfileResponse } from 'src/modules/user/dtos/profile-user-response';
import { ProfileDoctorService } from '../../usecases/perfil/perfil-doctor.service';
import { ResponseProfileDoctor } from '../../dtos/profile-doctor';
export declare class ProfiledoctorResolver {
    private readonly profileDocta;
    constructor(profileDocta: ProfileDoctorService);
    doctorProfile(user: UserProfileResponse): Promise<ResponseProfileDoctor>;
}
