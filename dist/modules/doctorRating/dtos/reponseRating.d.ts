import { UserInfo } from './topRatedDoctors';
export declare class ResponseRating {
    id: string;
    userId: string;
    doctorId: string;
    rate: number;
    comment: string;
    user?: UserInfo;
}
export declare class ResponseDoctorType {
    userId?: string;
    doctorId: string;
}
