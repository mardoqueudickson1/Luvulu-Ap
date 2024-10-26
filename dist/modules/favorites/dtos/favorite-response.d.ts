export type FavoriteData = {
    id: string;
    name: string;
    city: string;
    municipality: string;
    specialty?: string;
    avatar?: string;
};
export declare class DoctorInfor {
    id: string;
    name: string;
    city: string;
    municipality: string;
    specialty?: string;
    avatar?: string;
}
export declare class InstitutionInformations {
    id: string;
    name: string;
    city: string;
    municipality: string;
    avatar?: string;
}
export declare class ResponseAllFavotites {
    doctors: DoctorInfor[];
    institutions: InstitutionInformations[];
}
