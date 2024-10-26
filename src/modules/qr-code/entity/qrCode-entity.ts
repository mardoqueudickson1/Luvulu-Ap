import { ObjectType, Field } from '@nestjs/graphql';
import { Qrcode } from '@prisma/client';

@ObjectType()
export class Qrcodes implements Qrcode {
  @Field()
  id: string;

  @Field()
  patientId: string;

  @Field()
  code: string;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;

  @Field()
  deletedAt: boolean;
}
