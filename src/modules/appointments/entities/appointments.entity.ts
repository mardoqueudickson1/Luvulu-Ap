import { ObjectType, Field } from '@nestjs/graphql';
import { Appointment, AppointmentStatus } from '@prisma/client';

@ObjectType()
export class Appointments implements Appointment {
  @Field({ nullable: true })
  id: string;

  @Field()
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

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;

  @Field()
  deletedAt: boolean;
}
