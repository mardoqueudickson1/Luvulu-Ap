import { CreateMedicalHistoryInput } from '../../dtos/create-medical-history.input';
import { GetMedicalHsitoryByPatientIdOutput } from '../../dtos/get-medical-history-byPatientId-output';
import { MedicalHistoryEntity } from '../../entities/medical-history.entity';

export abstract class IMedicalHistoryRepository {
  abstract create(
    data: CreateMedicalHistoryInput,
  ): Promise<MedicalHistoryEntity>;
  abstract getMedicalHistoryByPatientId(
    patientId: string,
  ): Promise<GetMedicalHsitoryByPatientIdOutput[]>;
  abstract findById(id: string): Promise<MedicalHistoryEntity>;
  abstract remove({ id }: { id: string }): Promise<void>;
  abstract getMedicalHistoriesByDoctorId(
    doctorId: string,
  ): Promise<MedicalHistoryEntity[]>;

  abstract getMedicalHistoriesByAppointmentId(
    appointmentId: string,
  ): Promise<MedicalHistoryEntity[]>;
}
