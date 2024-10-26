import { Field, ObjectType } from '@nestjs/graphql';
import { MedicalReport } from '@prisma/client';

@ObjectType()
export class MedicalReports implements MedicalReport {
  @Field()
  id: string;

  @Field()
  institutionId: string;

  @Field()
  doctorId: string;

  @Field()
  patientId: string;

  @Field()
  AppointmentId: string;

  @Field({ nullable: true })
  additionalObservation: string | null;

  @Field({ nullable: true })
  medicalEvaluation: string | null;

  @Field()
  date: Date;

  @Field({ nullable: true })
  bloodPressure: string | null | null;

  @Field({ nullable: true })
  height: string | null;

  @Field({ nullable: true })
  weight: string | null;

  @Field({ nullable: true })
  pulse: string | null;

  @Field({ nullable: true })
  temperature: string | null;

  @Field({ nullable: true })
  otherPhysicalParams: string | null;

  @Field({ nullable: true })
  diagnosis: string | null;

  @Field({ nullable: true })
  treatmentPlan: string | null;

  @Field(() => [String])
  recommendations: string[];

  @Field(() => [String])
  orientations: string[];

  @Field({ nullable: true })
  observations: string | null;

  @Field({ nullable: true })
  symptomsDescription: string | null;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;

  @Field()
  deletedAt: boolean;
}
