import { InputType, Field } from '@nestjs/graphql';

import { IsBoolean, IsOptional, IsString } from 'class-validator';

@InputType()
export class UpdateDoctorInput {
  @Field({ nullable: true })
  @IsOptional()
  id?: string;

  @Field({ nullable: true })
  @IsOptional()
  specialty?: string;

  @IsOptional()
  @Field({ nullable: true })
  @IsBoolean()
  isOnVacation?: boolean;

  @IsString()
  @IsOptional()
  @Field({ nullable: true })
  bio?: string;

  @IsString()
  @IsOptional()
  @Field({ nullable: true })
  name?: string;

  @IsString()
  @IsOptional()
  @Field({ nullable: true })
  email?: string;

  @Field({ nullable: true })
  birthday?: Date;

  @Field({ nullable: true })
  @IsString()
  @IsOptional()
  nationality?: string | null;

  @IsString()
  @IsOptional()
  @Field({ nullable: true })
  phone?: string;

  @IsString()
  @IsOptional()
  @Field({ nullable: true })
  FatherName?: string | null;

  @IsString()
  @IsOptional()
  @Field({ nullable: true })
  MotherName?: string | null;

  @Field({ nullable: true })
  neigbhod?: string;

  @IsString()
  @IsOptional()
  @Field({ nullable: true })
  gender?: string | null;

  @IsString()
  @IsOptional()
  @Field({ nullable: true })
  city?: string;

  @Field({ nullable: true })
  @IsString()
  @IsOptional()
  municipality?: string | null;

  @Field({ nullable: true })
  @IsString()
  @IsOptional()
  addressComplement?: string | null;
}
