import { ResponseRating } from './reponseRating';
export type InstitutionResult = {
    id: string;
    name: string;
    city: string;
    municipality: string;
    neigbhod: string;
};
export declare class UserInfo {
    id: string;
    name: string | null;
    email: string | null;
    nationality: string | null;
    Role: string | null;
    phone: string | null;
    neigbhod: string | null;
    city: string | null;
    nif: string | null;
    municipality: string | null;
    avatar?: string | null;
    addressComplement: string | null;
}
export declare class Institution {
    id: string;
    name: string;
    city: string;
    municipality: string;
    neigbhod: string;
}
export declare class TopResponseAllDoctor {
    specialty?: string;
    bio?: string;
    pacientCared?: string;
    registrationNumber?: number;
    isFavorited?: boolean;
    user: UserInfo;
    averageRating?: string | number;
    totalRating?: string | number;
    institutions?: Institution[];
    rating: ResponseRating[];
}
export declare class InstitutionTypes {
    id: string;
    city: string;
    municipality: string;
    name: string;
}
export declare class ResponseRatedDoctor {
    id: string;
    specialty: string;
    institutionId: string;
    bio: string;
    registrationNumber: number;
    institutions: InstitutionTypes;
    user: UserInfo;
    rating: ResponseRating[];
    totalRating: number;
}
