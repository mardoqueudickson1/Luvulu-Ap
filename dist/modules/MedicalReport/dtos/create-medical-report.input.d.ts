export declare class CreateMedicalReportInput {
    institutionId: string;
    doctorId: string;
    patientId: string;
    AppointmentId: string;
    bloodPressure?: string;
    height?: string;
    weight?: string;
    pulse?: string;
    temperature?: string;
    otherPhysicalParams?: string;
    additionalObservation?: string;
    diagnosis?: string;
    treatmentPlan: string;
    recommendations?: string[];
    orientations?: string[];
    observations?: string;
    symptomsDescription?: string;
    medicalEvaluation?: string;
}
export declare class CreateMedicalReport {
    institutionId: string;
    doctorId?: string;
    patientId: string;
    AppointmentId: string;
    bloodPressure?: string;
    height?: string;
    weight?: string;
    pulse?: string;
    temperature?: string;
    otherPhysicalParams?: string;
    diagnosis?: string;
    treatmentPlan: string;
    recommendations?: string[];
    orientations?: string[];
    observations?: string;
    symptomsDescription?: string;
    medicalEvaluation?: string;
}
