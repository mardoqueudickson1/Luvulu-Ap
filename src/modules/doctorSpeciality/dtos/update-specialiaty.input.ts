import { InputType, Field, PartialType } from '@nestjs/graphql';
import { CreateSpecialityInput } from './create-specialiaty.input';

@InputType()
export class UpdateSpecialityInput extends PartialType(CreateSpecialityInput) {
  @Field(() => String)
  id: string;
}
