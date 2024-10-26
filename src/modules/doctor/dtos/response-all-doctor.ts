import { Field, ObjectType } from '@nestjs/graphql';
import { RoleType } from '@prisma/client';
import { ResponseRating } from 'src/modules/doctorRating/dtos/reponseRating';

export type InstitutionData = {
  id: string;
  name: string;
  city: string;
  municipality: string;
  nationality: string;
  Role: string;
  phone: string;
  birthday: string;
  gender: string;
  neigbhod: string;
  nif: string;
  FatherName: string;
  MotherName: string;
  addressComplement: string;
};

@ObjectType()
export class UserInformation {
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
  Role?: RoleType;

  @Field()
  MotherName: string;

  @Field()
  neigbhod: string;

  @Field()
  gender: string;

  @Field({ nullable: true })
  avatar?: string | null;

  @Field()
  city: string;

  @Field()
  nif: string;

  @Field()
  municipality: string;

  @Field()
  addressComplement: string;
}

@ObjectType()
export class InstitutionInformation {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field()
  city: string;

  @Field()
  municipality: string;

  @Field()
  neigbhod: string;

  @Field(() => [String])
  service: string[];
}

@ObjectType()
export class InstitutionIResponse {
  @Field(() => [InstitutionInformation])
  institutions: InstitutionInformation[];
}

@ObjectType()
export class ResponseAllDoctor {
  @Field()
  id?: string;

  @Field()
  specialty: string;

  @Field()
  bio: string;

  @Field()
  registrationNumber: number;

  @Field(() => UserInformation)
  user: UserInformation;

  @Field(() => [InstitutionInformation])
  institutions: InstitutionInformation[];
}

@ObjectType()
export class ResponseSearchDoctors {
  @Field()
  id: string;

  @Field(() => [ResponseRating])
  rating: ResponseRating[];

  @Field(() => UserInformation)
  user: UserInformation;

  @Field({ nullable: true })
  count?: number;
}

@ObjectType()
export class ResponseCount {
  @Field({ nullable: true })
  count?: number;

  @Field({ nullable: true })
  doctors?: number;
}
