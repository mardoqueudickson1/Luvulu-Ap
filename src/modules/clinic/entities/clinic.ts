import { ObjectType, Field } from '@nestjs/graphql';
import { Institution } from '@prisma/client';

@ObjectType()
export class Clinics implements Institution {
  @Field()
  id: string;

  @Field()
  userId: string;

  @Field()
  clinicLatitude: string;

  @Field()
  cliniclongitude: string;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;

  @Field()
  deletedAt: boolean;
}
