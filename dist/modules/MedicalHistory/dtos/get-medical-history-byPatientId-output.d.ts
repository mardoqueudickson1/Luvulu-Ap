import { Appointments } from 'src/modules/appointments/entities/appointments.entity';
export declare class DoctorsResponse {
    id: string;
    name: string;
    phone: string;
    email: string | null;
    gender: string | null;
    birthday: Date | null;
    nationality: string;
    avatar?: string | null;
    city: string;
    municipality: string;
}
export declare class GetMedicalHsitoryByPatientIdOutput {
    id: string;
    appointmentId: string;
    appointment: Appointments;
    doctor: DoctorsResponse;
}
