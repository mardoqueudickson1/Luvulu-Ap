import { Users } from 'src/modules/user/entities/user';
export declare class ResponsePatientOutput {
    id: string;
    number: number;
    user: Users;
}
export type PatientProfle = {
    Patient: {
        number: string;
    };
};
export type ResponseUser = {
    patient: {
        id: string;
    };
};
