import { CreateServiceInput } from '../../../clinicServices/dtos/create-clinic-services.input';
import { ServicesClinics } from '../../../clinicServices/entities/services-clinic.entity';
import { ClinicServicesType } from '../../dtos/clinic.types';
import { ResponseUser } from '../../dtos/clinic-services-output';
import { UpdateClinicServicesInput } from '../../dtos/update-clinic-services.input';

export abstract class IServicesClinicRepository {
  abstract create(data: CreateServiceInput): Promise<ServicesClinics>;
  abstract findById(id: string): Promise<ServicesClinics>;
  abstract findUser(id: string): Promise<ResponseUser>;
  abstract remove({ id }: { id: string }): Promise<void>;
  abstract findAll(clinicId: string): Promise<ServicesClinics[]>;
  abstract findByName(name: string): Promise<ServicesClinics | null>;
  abstract findClinicById(id: string): Promise<ClinicServicesType>;
  abstract update(
    id: string,
    data: UpdateClinicServicesInput,
  ): Promise<ServicesClinics>;
}
