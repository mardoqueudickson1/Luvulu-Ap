import { Resolver, Query, Args } from '@nestjs/graphql';
import { FindOneDoctorService } from '../../usecases/findOne/findOne-doctor.service';
import { ResponseDoctor } from '../../dtos/response-doctor';

@Resolver()
export class FindOneDoctorResolver {
  constructor(private readonly doctorService: FindOneDoctorService) {}

  @Query(() => ResponseDoctor)
  async findOneDoctor(@Args('id', { type: () => String }) id: string) {
    return await this.doctorService.findOne(id);
  }
}
