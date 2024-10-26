export declare class UserOutput {
    id: string;
    name: string;
}
export declare class DoctorOutput {
    id: string;
    bio: string;
    user: UserOutput;
}
export declare class institutionOutput {
    id: string;
    user: UserOutput;
}
export declare class DoctorScheduleOutput {
    dayOfWeek: number;
    doctor: DoctorOutput;
    institution: institutionOutput;
    hours: string[];
}
