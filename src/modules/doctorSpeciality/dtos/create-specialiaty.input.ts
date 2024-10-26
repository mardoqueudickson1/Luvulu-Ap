import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateSpecialityInput {
  @Field()
  name: string;

  @Field()
  description: string;
}
