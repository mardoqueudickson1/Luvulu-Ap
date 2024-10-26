import { InputType, Field, ObjectType } from '@nestjs/graphql';

@InputType()
export class MedicalReportType {
  @Field({ nullable: true })
  AppointmentId?: string;

  @Field({ nullable: true })
  institutionId?: string;

  @Field({ nullable: true })
  doctorId?: string;

  @Field({ nullable: true })
  patientId?: string;
}

@ObjectType()
export class PacientInfo {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field()
  email: string;

  @Field()
  birthday: Date;

  @Field()
  nationality: string;

  @Field()
  phone: string;

  @Field()
  FatherName: string;

  @Field()
  MotherName: string;

  @Field()
  neigbhod: string;

  @Field()
  gender: string;

  @Field()
  city: string;

  @Field()
  municipality: string;
}

@ObjectType()
export class DoctorClinicInfo {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field()
  email: string;

  @Field()
  birthday: Date;

  @Field()
  nationality: string;

  @Field()
  phone: string;

  @Field()
  neigbhod: string;

  @Field({ nullable: true })
  gender?: string;

  @Field()
  city: string;

  @Field()
  municipality: string;
}

@ObjectType()
export class MedicalReportResponse {
  @Field()
  id: string;

  @Field({ nullable: true })
  bloodPressure?: string | null;

  @Field({ nullable: true })
  height: string | null;

  @Field({ nullable: true })
  weight: string | null;

  @Field({ nullable: true })
  pulse?: string | null;

  @Field({ nullable: true })
  temperature?: string | null;

  @Field({ nullable: true })
  otherPhysicalParams?: string | null;

  @Field({ nullable: true })
  additionalObservation?: string | null;

  @Field({ nullable: true })
  diagnosis: string;

  @Field({ nullable: true })
  treatmentPlan: string | null;

  @Field({ nullable: true })
  observations?: string | null;

  @Field({ nullable: true })
  specialtyArea: string | null;

  @Field()
  isUrgent: boolean;

  @Field({ nullable: true })
  symptomsDescription: string;

  @Field({ nullable: true })
  medicalEvaluation: string;

  @Field()
  date: Date;

  @Field(() => [String])
  recommendations: string[];

  @Field(() => [String])
  orientations: string[];

  @Field()
  institution: DoctorClinicInfo;

  @Field()
  pacient: PacientInfo;

  @Field()
  doctor: DoctorClinicInfo;
}
