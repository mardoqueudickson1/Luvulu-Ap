import { ResponseClinicRating, ServiceClinic } from 'src/modules/clinicRating/dtos/reponseClinicRating';
declare class UserClinic {
    id: string;
    name: string;
    email: string;
    nationality: string;
    Role: string;
    phone: string;
    neigbhod: string;
    city: string;
    nif: string;
    municipality: string;
    addressComplement: string;
    avatar?: string | null;
}
export declare class ClinicOutput {
    user: UserClinic;
    clinicLatitude?: string;
    cliniclongitude?: string;
}
export declare class ClinicResponse {
    id: string;
    user: UserClinic;
    clinicLatitude?: string;
    cliniclongitude?: string;
}
export declare class NearByclinicResponse {
    user: UserClinic;
    distance?: number;
    time?: string;
    distanceInKm?: string;
    rating?: ResponseClinicRating[];
    averageRating?: string | number;
    totalRating?: string | number;
    services?: ServiceClinic[];
    clinicRating?: ResponseClinicRating[];
}
export {};
