import { RoleType } from '@prisma/client';
import { ResponseRating } from 'src/modules/doctorRating/dtos/reponseRating';
export type InstitutionData = {
    id: string;
    name: string;
    city: string;
    municipality: string;
    nationality: string;
    Role: string;
    phone: string;
    birthday: string;
    gender: string;
    neigbhod: string;
    nif: string;
    FatherName: string;
    MotherName: string;
    addressComplement: string;
};
export declare class UserInformation {
    id: string;
    name: string;
    email: string;
    birthday: Date;
    nationality: string;
    phone: string;
    FatherName: string;
    Role?: RoleType;
    MotherName: string;
    neigbhod: string;
    gender: string;
    avatar?: string | null;
    city: string;
    nif: string;
    municipality: string;
    addressComplement: string;
}
export declare class InstitutionInformation {
    id: string;
    name: string;
    city: string;
    municipality: string;
    neigbhod: string;
    service: string[];
}
export declare class InstitutionIResponse {
    institutions: InstitutionInformation[];
}
export declare class ResponseAllDoctor {
    id?: string;
    specialty: string;
    bio: string;
    registrationNumber: number;
    user: UserInformation;
    institutions: InstitutionInformation[];
}
export declare class ResponseSearchDoctors {
    id: string;
    rating: ResponseRating[];
    user: UserInformation;
    count?: number;
}
export declare class ResponseCount {
    count?: number;
    doctors?: number;
}
