import { Resolver, Query } from '@nestjs/graphql';
import { ListAllDoctorService } from '../../usecases/listAll/listaAll-doctor.service';
import { ResponseAllDoctor } from '../../dtos/response-all-doctor';

@Resolver(() => ResponseAllDoctor)
export class ListAlldoctorResolver {
  constructor(private readonly doctorService: ListAllDoctorService) {}

  @Query(() => [ResponseAllDoctor])
  async findAllDoctor() {
    return await this.doctorService.listAll();
  }
}
