import { Injectable } from '@nestjs/common';
import { updateConsultatinoType } from '../../dtos/update-consulationType.input';
import { IConsultatioTypeRepository } from '../../repository/interface/IConsultatioTypeRepository';
import { ConsultationTypes } from '../../entities/consultationType.entity';

@Injectable()
export class UpdateConsultationTypeService {
  constructor(private readonly repo: IConsultatioTypeRepository) {}

  async update(
    id: string,
    data: updateConsultatinoType,
  ): Promise<ConsultationTypes> {
    const doctor = await this.repo.update(id, data);
    return doctor;
  }
}
