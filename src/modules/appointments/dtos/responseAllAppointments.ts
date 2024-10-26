import { ObjectType, Field } from '@nestjs/graphql';
import { AppointmentStatus } from '@prisma/client';

@ObjectType()
export class UsersResponse {
  @Field({ nullable: true })
  id?: string;

  @Field()
  name: string;

  @Field()
  email: string;

  @Field({ nullable: true })
  neigbhod: string | null;

  @Field()
  city: string;

  @Field({ nullable: true })
  municipality?: string | null;

  @Field({ nullable: true })
  addressComplement?: string | null;

  @Field({ nullable: true })
  phone?: string;

  @Field({ nullable: true })
  birthday?: Date;

  @Field({ nullable: true })
  avatar?: string;

  @Field({ nullable: true })
  gender?: string | null;

  @Field({ nullable: true })
  FatherName?: string | null;

  @Field({ nullable: true })
  MotherName?: string | null;
}

@ObjectType()
export class DoctorsReponses {
  @Field({ nullable: true })
  id: string;

  @Field()
  isOnVacation: boolean;

  // @Field()
  // userId: string;

  // @Field()
  // registrationNumber: number;

  @Field()
  specialty: string;

  @Field()
  bio: string;

  @Field(() => UsersResponse)
  user: UsersResponse;
}

@ObjectType()
export class InstitutionsReponse {
  @Field({ nullable: true })
  id: string;

  // @Field()
  // userId: string;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;

  @Field()
  user: UsersResponse;
}

@ObjectType()
export class ResponseAllAppointPatient {
  @Field({ nullable: true })
  id: string;

  @Field()
  pacient: UsersResponse;

  @Field({ nullable: true })
  consultationType: string;

  @Field({ nullable: true })
  doctorId?: string;

  @Field({ nullable: true })
  institutionId?: string;

  @Field({ nullable: true })
  description?: string;

  @Field()
  isUrgent: boolean;

  @Field()
  isReported?: boolean;

  @Field()
  isRated?: boolean;

  @Field()
  date: Date;

  @Field({ nullable: true })
  patientId?: string;

  @Field()
  doctor: DoctorsReponses;

  @Field(() => InstitutionsReponse)
  institution: InstitutionsReponse;

  @Field(() => [String])
  medicalReportId?: string[];

  @Field({ nullable: true })
  status: AppointmentStatus;

  @Field()
  symptomDescription: string;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
