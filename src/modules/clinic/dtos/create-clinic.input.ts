import { InputType, Field, HideField } from '@nestjs/graphql';
import { RoleType } from '@prisma/client';
import { IsOptional, IsString } from 'class-validator';

@InputType()
export class CreateClinicInput {
  @Field({ nullable: true })
  name: string;

  @Field()
  @IsString()
  email: string;

  @Field()
  @IsString()
  password: string;

  @Field({ nullable: true })
  @HideField()
  @HideField()
  birthday: Date;

  @Field({ nullable: true })
  @IsString()
  @IsOptional()
  @HideField()
  nationality: string | null;

  @Field()
  @Field({ nullable: true })
  Role: RoleType;

  @Field()
  @IsString()
  phone: string;

  @Field({ nullable: true })
  @HideField()
  FatherName: string | null;

  @Field()
  @Field({ nullable: true })
  @HideField()
  MotherName: string | null;

  @Field({ nullable: true })
  @IsOptional()
  @HideField()
  @IsString()
  BI?: string | null;

  @Field({ nullable: true })
  @IsString()
  neigbhod: string | null;

  @Field({ nullable: true })
  @HideField()
  gender: string | null;

  @Field({ nullable: true })
  avatar?: string;

  @Field()
  @IsString()
  city: string;

  @Field({ nullable: true })
  type: string;

  @Field({ nullable: true })
  nif: string | null;

  @Field({ nullable: true })
  @IsString()
  @IsOptional()
  municipality?: string | null;

  @Field({ nullable: true })
  @IsString()
  @IsOptional()
  addressComplement?: string | null;

  @Field()
  clinicLatitude: number;

  @Field()
  cliniclongitude: number;
}

@InputType()
export class CreateClinicPartial {
  @Field()
  userId: string;

  @Field()
  clinicLatitude: string;

  @Field()
  cliniclongitude: string;

  @Field({ nullable: true })
  type?: string;
}
