import { AppointmentType } from 'src/modules/appointments/dtos/appointment.types';
import { CreateMedicalReport } from '../../dtos/create-medical-report.input';
import { MedicalReportResponse } from '../../dtos/medical-report-response';
import { MedicalReports } from '../../entities/medical-report.entity';
export declare abstract class IMedicalReportRepository {
    abstract create(data: CreateMedicalReport): Promise<MedicalReports>;
    abstract findOne(id: string): Promise<MedicalReportResponse>;
    abstract alreadyExist(id: string): Promise<MedicalReports>;
    abstract findUser(id: string): Promise<AppointmentType>;
}
