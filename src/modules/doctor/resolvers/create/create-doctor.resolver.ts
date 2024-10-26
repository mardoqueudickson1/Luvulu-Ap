import {
  CreateDoctorInput,
  CreateDoctorPartial,
} from '../../dtos/create-doctor.input';
import { Doctors } from '../../entities/doctor.entity';
import { CreateDoctorService } from '../../usecases/create/create-doctor.service';
import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { CurrentUser } from '../../../auth/decorator/current-user.decorator';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from 'src/modules/auth/guards/jwt-auth.guard';

@Resolver('doctor')
export class CreateDoctorResolver {
  constructor(private readonly doctorService: CreateDoctorService) {}

  @UseGuards(GqlAuthGuard)
  @Mutation(() => Doctors)
  async createDoctor(
    @CurrentUser() user: any,
    @Args('data') createdoctorInput: CreateDoctorInput,
    @Args('data2') createPartial: CreateDoctorPartial,
  ) {
    createPartial.institutionId = user.id;
    return await this.doctorService.create(createdoctorInput, createPartial);
  }
}
