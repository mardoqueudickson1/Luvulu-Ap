import { Injectable, NotFoundException } from '@nestjs/common';
import { IMedicalReportRepository } from '../../repository/interface/IMediclaReportRepository';
import { MedicalReportResponse } from '../../dtos/medical-report-response';

@Injectable()
export class FindOneMedicalReportService {
  constructor(private readonly repo: IMedicalReportRepository) {}

  async findOne(id: string): Promise<MedicalReportResponse> {
    const result = await this.repo.findOne(id);

    if (!result) {
      throw new NotFoundException('Nenhum dados encontrado');
    }
    return result;
  }
}
