import { ResponseUser } from 'src/modules/patient/dtos/reponsePatientOutput';
import { CreateSpecialityInput } from '../../dtos/create-specialiaty.input';
import { SpecialityResponse } from '../../dtos/specialiaty-output';
import { Specialities } from '../../entities/specialiaty.entity';

export abstract class ISpecialityRepository {
  abstract create(data: CreateSpecialityInput): Promise<Specialities>;
  abstract findByName(name: string): Promise<Specialities>;
  abstract findUser(id: string): Promise<ResponseUser>;
  abstract remove({ id }: { id: string }): Promise<void>;
  abstract findAll(): Promise<SpecialityResponse[]>;
}
