import { Users } from 'src/modules/user/entities/user';
export declare class PatientProfileOutput {
    number: number;
    qrCode?: string | null;
    user: Users;
    pacientCardID: string[] | null;
}
