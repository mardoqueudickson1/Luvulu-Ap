import { Users } from 'src/modules/user/entities/user';
export declare class ResponseClinic {
    id: string;
    token?: string;
    user: Users;
}
export type ProfileClinic = {
    Clinic: {
        id: string;
    };
};
export type ResponseUser = {
    Clinic: {
        id: string;
    };
};
