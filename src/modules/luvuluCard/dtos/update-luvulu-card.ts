import { InputType, Field, PartialType } from '@nestjs/graphql';
import { CreateLuvuluCardInput } from './create-luvulu-card.input';

@InputType()
export class UpdateLuvuluCard extends PartialType(CreateLuvuluCardInput) {
  @Field(() => String)
  id: string;
}
