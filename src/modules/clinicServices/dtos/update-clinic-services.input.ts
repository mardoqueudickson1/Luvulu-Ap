import { InputType, Field, PartialType } from '@nestjs/graphql';
import { CreateServiceInput } from './create-clinic-services.input';

@InputType()
export class UpdateClinicServicesInput extends PartialType(CreateServiceInput) {
  @Field(() => String)
  id: string;
}
