import { PrismaService } from '../../../prisma/prisma.service';
import { IMedicalReportRepository } from '../interface/IMediclaReportRepository';
import { CreateMedicalReportInput } from '../../dtos/create-medical-report.input';
import { MedicalReportResponse } from '../../dtos/medical-report-response';
import { MedicalReports } from '../../entities/medical-report.entity';
import { AppointmentType } from 'src/modules/appointments/dtos/appointment.types';
export declare class PrismaMedicalReportRepositoy implements IMedicalReportRepository {
    private prisma;
    constructor(prisma: PrismaService);
    create(data: CreateMedicalReportInput): Promise<MedicalReports>;
    findOne(id: string): Promise<MedicalReportResponse>;
    findUser(id: string): Promise<AppointmentType>;
    alreadyExist(id: string): Promise<MedicalReports>;
}
