import { MedicalReports } from '../../entities/medical-report.entity';
import { CreateMedicalReportService } from '../../usecases/create/create-medical-report.service';
import { CreateMedicalReport } from '../../dtos/create-medical-report.input';
export declare class CreateMedicalReportResolver {
    private readonly repo;
    constructor(repo: CreateMedicalReportService);
    createMedicalReport(input: CreateMedicalReport, user: any): Promise<MedicalReports>;
}
