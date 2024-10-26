import { CreatePatientInput } from '../../../patient/dtos/create-patient.input';
import { Patients } from '../../entities/patient.entity';
import { CreatePatientService } from '../../usecases/create/create-patient.service';
import { Resolver, Mutation, Args } from '@nestjs/graphql';

@Resolver('patient')
export class CreatePatientResolver {
  constructor(private readonly patientService: CreatePatientService) {}

  @Mutation(() => Patients)
  async createPatient(@Args('data') createPatientInput: CreatePatientInput) {
    return await this.patientService.create(createPatientInput);
  }
}
