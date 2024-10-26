export declare class MedicalReportType {
    AppointmentId?: string;
    institutionId?: string;
    doctorId?: string;
    patientId?: string;
}
export declare class PacientInfo {
    id: string;
    name: string;
    email: string;
    birthday: Date;
    nationality: string;
    phone: string;
    FatherName: string;
    MotherName: string;
    neigbhod: string;
    gender: string;
    city: string;
    municipality: string;
}
export declare class DoctorClinicInfo {
    id: string;
    name: string;
    email: string;
    birthday: Date;
    nationality: string;
    phone: string;
    neigbhod: string;
    gender?: string;
    city: string;
    municipality: string;
}
export declare class MedicalReportResponse {
    id: string;
    bloodPressure?: string | null;
    height: string | null;
    weight: string | null;
    pulse?: string | null;
    temperature?: string | null;
    otherPhysicalParams?: string | null;
    additionalObservation?: string | null;
    diagnosis: string;
    treatmentPlan: string | null;
    observations?: string | null;
    specialtyArea: string | null;
    isUrgent: boolean;
    symptomsDescription: string;
    medicalEvaluation: string;
    date: Date;
    recommendations: string[];
    orientations: string[];
    institution: DoctorClinicInfo;
    pacient: PacientInfo;
    doctor: DoctorClinicInfo;
}
