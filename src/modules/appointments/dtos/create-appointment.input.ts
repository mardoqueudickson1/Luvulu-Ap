import { InputType, Field } from '@nestjs/graphql';
import { AppointmentStatus } from '@prisma/client';

@InputType()
export class CreateAppointInput {
  @Field({ nullable: true })
  patientId: string;

  @Field()
  institutionId: string;

  @Field()
  consultationTypeId: string;

  @Field()
  doctorId: string;

  @Field()
  symptomDescription: string;

  @Field()
  isUrgent: boolean;

  @Field()
  date: Date;

  @Field({ nullable: true })
  status: AppointmentStatus;
}
