import { MedicalReport } from '@prisma/client';
export declare class MedicalReports implements MedicalReport {
    id: string;
    institutionId: string;
    doctorId: string;
    patientId: string;
    AppointmentId: string;
    additionalObservation: string | null;
    medicalEvaluation: string | null;
    date: Date;
    bloodPressure: string | null | null;
    height: string | null;
    weight: string | null;
    pulse: string | null;
    temperature: string | null;
    otherPhysicalParams: string | null;
    diagnosis: string | null;
    treatmentPlan: string | null;
    recommendations: string[];
    orientations: string[];
    observations: string | null;
    symptomsDescription: string | null;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: boolean;
}
