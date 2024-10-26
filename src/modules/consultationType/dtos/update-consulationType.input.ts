import { InputType, Field, PartialType } from '@nestjs/graphql';
import { CreateConsultatinoTypeInput } from './create-consultationType.input';

@InputType()
export class updateConsultatinoType extends PartialType(
  CreateConsultatinoTypeInput,
) {
  @Field(() => String)
  id: string;
}
