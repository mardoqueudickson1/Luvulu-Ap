import { ObjectType, Field } from '@nestjs/graphql';
import { Speciality } from '@prisma/client';

@ObjectType()
export class Specialities implements Speciality {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field()
  description: string;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;

  @Field()
  deletedAt: boolean;
}
