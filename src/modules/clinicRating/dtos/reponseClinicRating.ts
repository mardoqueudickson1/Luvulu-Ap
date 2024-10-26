import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class ResponseClinicRating {
  @Field()
  id: string;

  @Field()
  userId: string;

  @Field()
  clinicId: string;

  @Field()
  rate: number;

  @Field()
  comment: string;
}

@ObjectType()
export class ServiceClinic {
  @Field()
  name: string;

  @Field()
  description: string;
}
