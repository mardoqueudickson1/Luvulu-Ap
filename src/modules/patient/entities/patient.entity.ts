import { ObjectType, Field } from '@nestjs/graphql';
import { Patient } from '@prisma/client';

@ObjectType()
export class Patients implements Patient {
  @Field()
  id: string;

  @Field()
  number: number;

  @Field()
  userId: string;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;

  @Field()
  deletedAt: boolean;
}
