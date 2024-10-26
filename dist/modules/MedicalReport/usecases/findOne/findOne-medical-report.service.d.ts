import { IMedicalReportRepository } from '../../repository/interface/IMediclaReportRepository';
import { MedicalReportResponse } from '../../dtos/medical-report-response';
export declare class FindOneMedicalReportService {
    private readonly repo;
    constructor(repo: IMedicalReportRepository);
    findOne(id: string): Promise<MedicalReportResponse>;
}
