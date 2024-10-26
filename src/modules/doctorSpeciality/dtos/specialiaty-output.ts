import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class SpecialityResponse {
  @Field()
  name: string;

  @Field()
  description: string;
}
