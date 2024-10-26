import { Resolver, Query, Args } from '@nestjs/graphql';
import { InstitutionIResponse } from '../../dtos/response-all-doctor';
import { listClinicOfDoctorService } from '../../usecases/findClinicOfDoctor/list-all-clinic-OfDoctor.service';

@Resolver()
export class listClinicOfDoctorResolver {
  constructor(private readonly doctorService: listClinicOfDoctorService) {}

  @Query(() => [InstitutionIResponse])
  async findAllClinicOfDoctor(@Args('doctor_id') doctor_id: string) {
    return await this.doctorService.listClinicOfDoctor(doctor_id);
  }
}
