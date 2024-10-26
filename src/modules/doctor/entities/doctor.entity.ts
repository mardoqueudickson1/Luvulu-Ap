import { ObjectType, Field } from '@nestjs/graphql';
import { Doctor, DoctorInstitution } from '@prisma/client';

@ObjectType()
export class Doctors implements Doctor {
  @Field()
  id: string;

  @Field()
  institutionId: string;

  @Field()
  isOnVacation: boolean;

  @Field()
  userId: string;

  @Field()
  registrationNumber: number;

  @Field()
  specialty: string;

  @Field()
  bio: string;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;

  @Field()
  deletedAt: boolean;
}

@ObjectType()
export class DoctorInstitutions implements DoctorInstitution {
  @Field()
  id: string;

  @Field()
  doctorId: string;

  @Field()
  institutionId: string;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;

  @Field()
  deletedAt: boolean;

  @Field({ nullable: true })
  message?: string;
}
