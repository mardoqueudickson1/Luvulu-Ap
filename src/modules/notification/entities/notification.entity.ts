import { ObjectType, Field } from '@nestjs/graphql';
import { Notification, TypeNotification } from '@prisma/client';

@ObjectType()
export class Notifications implements Notification {
  @Field()
  id: string;

  @Field()
  content: string;

  @Field()
  read: boolean;

  @Field()
  type: TypeNotification;

  @Field({ nullable: true })
  doctor_id: string;

  @Field({ nullable: true })
  patient_id: string;

  @Field({ nullable: true })
  institution_id: string;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;

  @Field()
  deletedAt: boolean;
}
