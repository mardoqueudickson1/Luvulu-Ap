import { ObjectType, Field } from '@nestjs/graphql';
import { ClinicRating } from '@prisma/client';

@ObjectType()
export class ClinicRatings implements ClinicRating {
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

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;

  @Field()
  deletedAt: boolean;
}
