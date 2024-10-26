import { InputType, Field } from '@nestjs/graphql';
import { TypeNotification } from '@prisma/client';

@InputType()
export class CreateNotificationInput {
  @Field()
  content: string;

  @Field()
  read: boolean;

  @Field({ nullable: true })
  type?: TypeNotification;

  @Field({ nullable: true })
  doctor_id?: string;

  @Field({ nullable: true })
  patient_id?: string;

  @Field({ nullable: true })
  institution_id?: string;
}
