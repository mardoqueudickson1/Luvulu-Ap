import { ObjectType, Field } from '@nestjs/graphql';
import { MedicalHistory } from '@prisma/client';

@ObjectType()
export class MedicalHistoryEntity implements MedicalHistory {
  @Field()
  id: string;

  @Field()
  AppointmentId: string;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;

  @Field()
  deletedAt: boolean;
}
