import { Users } from 'src/modules/user/entities/user';
export declare class DoctorAppointmentsPatients {
    patients: Users;
}
export declare class ResponseProfileDoctor {
    id: string;
    specialty: string;
    registrationNumber?: number;
    bio: string;
    user: Users;
}
