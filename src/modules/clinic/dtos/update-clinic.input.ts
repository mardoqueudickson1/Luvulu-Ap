import { InputType, Field, PartialType } from '@nestjs/graphql';
import { CreateClinicInput } from './create-clinic.input';

@InputType()
export class UpdateClinicInput extends PartialType(CreateClinicInput) {
  @Field({ nullable: true })
  id: string;
}
