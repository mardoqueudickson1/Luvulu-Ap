import { InputType, Field } from '@nestjs/graphql';
import { RoleType } from '@prisma/client';
import { IsOptional, IsString } from 'class-validator';

@InputType()
export class CreatePatientInput {
  @Field({ nullable: true })
  name: string;

  @Field()
  @IsString()
  email: string;

  @Field()
  @IsString()
  password: string;

  @Field({ nullable: true })
  birthday?: Date;

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

  @Field()
  @Field({ nullable: true })
  MotherName: string | null;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  BI?: string | null;

  @Field({ nullable: true })
  avatar?: string;

  @Field({ nullable: true })
  @IsString()
  neigbhod: string | null;

  @Field({ nullable: true })
  gender: string | null;

  @Field()
  @IsString()
  city: string;

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
}

export class CreatePatientPartial {
  @Field()
  userId: string;

  @Field()
  number: number;
}
