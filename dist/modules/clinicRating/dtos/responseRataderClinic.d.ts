import { ResponseClinicRating } from './reponseClinicRating';
import { InstitutionTypes, UserInfos } from './topRatedClinic';
export declare class ResponseRatedDoctor {
    id: string;
    specialty: string;
    institutionId: string;
    bio: string;
    registrationNumber: number;
    institutions: InstitutionTypes;
    user: UserInfos;
    rating: ResponseClinicRating[];
    totalRating: number;
}
