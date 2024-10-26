import { BadRequestException, Injectable } from '@nestjs/common';
import { IConsultatioTypeRepository } from '../../repository/interface/IConsultatioTypeRepository';
import { CreateConsultatinoTypeInput } from '../../dtos/create-consultationType.input';
import { messages } from 'src/utils/shared/errorsMessages';

@Injectable()
export class CreateConsulatationTypeService {
  constructor(private consType: IConsultatioTypeRepository) {}

  async create(data: CreateConsultatinoTypeInput) {
    try {
      console.log(data);
      const nameUpperCase = data.name.toUpperCase();

      const existingConsultationType =
        await this.consType.findByName(nameUpperCase);

      if (existingConsultationType) {
        throw new BadRequestException(messages.typeFound);
      }

      const newConsultationType = await this.consType.create({
        name: nameUpperCase,
        description: data.description,
      });

      return newConsultationType;
    } catch (error) {
      throw error;
    }
  }
}
