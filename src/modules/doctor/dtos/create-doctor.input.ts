import { InputType, Field } from '@nestjs/graphql';
import { RoleType } from '@prisma/client';
import { IsOptional, IsString } from 'class-validator';

@InputType()
export class CreateDoctorInput {
  @Field()
  name: string;

  @Field()
  @IsString()
  email: string;

  @Field()
  @IsString()
  password: string;

  @Field({ nullable: true })
  birthday: Date;

  @Field({ nullable: true })
  @IsString()
  @IsOptional()
  nationality: string | null;

  @Field()
  @Field({ nullable: true })
  Role: RoleType;

  @Field()
  @IsString()
  phone: string;

  @Field({ nullable: true })
  FatherName: string | null;

  @Field({ nullable: true })
  MotherName: string | null;

  @Field({ nullable: true })
  @IsString()
  neigbhod: string | null;

  @Field({ nullable: true })
  gender: string | null;

  @Field({ nullable: true })
  avatar?: string;

  @Field()
  @IsString()
  city: string;

  @Field()
  nif: string;

  @Field({ nullable: true })
  @IsString()
  @IsOptional()
  municipality?: string | null;

  @Field({ nullable: true })
  @IsString()
  @IsOptional()
  addressComplement?: string | null;
}

@InputType()
export class CreateDoctorPartial {
  @Field({ nullable: true })
  @IsOptional()
  id?: string;

  @Field({ nullable: true })
  @IsOptional()
  userId?: string;

  @Field({ nullable: true })
  institutionId?: string;

  @Field()
  specialty: string;

  @IsOptional()
  @Field({ nullable: true })
  isOnVacation?: boolean;

  @Field({ nullable: true })
  @IsOptional()
  registrationNumber?: number;

  @Field()
  bio: string;
}
