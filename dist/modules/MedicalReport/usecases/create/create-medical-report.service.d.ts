import { CreateMedicalReport } from '../../dtos/create-medical-report.input';
import { IMedicalReportRepository } from '../../repository/interface/IMediclaReportRepository';
export declare class CreateMedicalReportService {
    private repo;
    constructor(repo: IMedicalReportRepository);
    create(data: CreateMedicalReport): Promise<import("../../entities/medical-report.entity").MedicalReports>;
}
