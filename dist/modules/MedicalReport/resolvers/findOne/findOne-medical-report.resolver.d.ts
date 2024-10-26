import { MedicalReportResponse } from '../../dtos/medical-report-response';
import { FindOneMedicalReportService } from '../../usecases/findOne/findOne-medical-report.service';
export declare class FindOneMedicalReportResolver {
    private readonly repo;
    constructor(repo: FindOneMedicalReportService);
    findOneMedicalReport(id: string): Promise<MedicalReportResponse>;
}
