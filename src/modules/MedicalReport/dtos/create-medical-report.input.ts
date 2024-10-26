import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateMedicalReportInput {
  @Field()
  institutionId: string;

  @Field()
  doctorId: string;

  @Field()
  patientId: string;

  @Field()
  AppointmentId: string;

  @Field()
  bloodPressure?: string;

  @Field()
  height?: string;

  @Field()
  weight?: string;

  @Field()
  pulse?: string;

  @Field()
  temperature?: string;

  @Field()
  otherPhysicalParams?: string;

  @Field({ nullable: true })
  additionalObservation?: string;

  @Field()
  diagnosis?: string;

  @Field()
  treatmentPlan: string;

  @Field(() => [String])
  recommendations?: string[];

  @Field(() => [String])
  orientations?: string[];

  @Field({ nullable: true })
  observations?: string;

  @Field({ nullable: true })
  symptomsDescription?: string;

  @Field({ nullable: true })
  medicalEvaluation?: string;
}

@InputType()
export class CreateMedicalReport {
  @Field()
  institutionId: string;

  @Field({ nullable: true })
  doctorId?: string;

  @Field()
  patientId: string;

  @Field()
  AppointmentId: string;

  @Field({ nullable: true })
  bloodPressure?: string;

  @Field({ nullable: true })
  height?: string;

  @Field({ nullable: true })
  weight?: string;

  @Field({ nullable: true })
  pulse?: string;

  @Field({ nullable: true })
  temperature?: string;

  @Field({ nullable: true })
  otherPhysicalParams?: string;

  @Field({ nullable: true })
  diagnosis?: string;

  @Field({ nullable: true })
  treatmentPlan: string;

  @Field(() => [String])
  recommendations?: string[];

  @Field(() => [String])
  orientations?: string[];

  @Field({ nullable: true })
  observations?: string;

  @Field({ nullable: true })
  symptomsDescription?: string;

  @Field({ nullable: true })
  medicalEvaluation?: string;
}
