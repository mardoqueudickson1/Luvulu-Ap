import { Users } from 'src/modules/user/entities/user';
export declare class InstitutionType {
    name: string[];
}
export declare class ResponseDoctor {
    id: string;
    specialty: string;
    institutionId: string;
    bio: string;
    registrationNumber: number;
    institution: InstitutionType;
    user: Users;
}
export type ProfileDoctor = {
    Doctor: {
        bio: string;
        specialty: string;
        registrationNumber: number;
    };
};
export type ResponseUser = {
    Institution: {
        id: string;
    };
    Doctor: {
        id: string;
    };
};
