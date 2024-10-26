import { ServiceClinic } from './reponseClinicRating';
export type InstitutionResults = {
    id: string;
    name: string;
    city: string;
    municipality: string;
    neigbhod: string;
};
export declare class UserInfos {
    id: string;
    name: string | null;
    email: string | null;
    nationality: string | null;
    Role: string | null;
    phone: string | null;
    neigbhod: string | null;
    city: string | null;
    nif: string | null;
    avatar?: string | null;
    municipality: string | null;
    addressComplement: string | null;
}
export declare class Institution {
    id: string;
    name: string;
    city: string;
    municipality: string;
    neigbhod: string;
}
export declare class TopResponseAllClinic {
    user: UserInfos;
    isFavorited?: boolean;
    averageRating?: string | number;
    totalRating?: string | number;
    services?: ServiceClinic[];
    pacientsCared?: number;
    doctorRated?: number[];
}
export declare class InstitutionTypes {
    name: string[];
}
