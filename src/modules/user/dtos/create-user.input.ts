import { InputType, Field } from '@nestjs/graphql';
import { RoleType } from '@prisma/client';
import { IsDate, IsOptional, IsString } from 'class-validator';

@InputType()
export class CreateUserInput {
  @Field()
  name: string;

  @Field()
  @IsString()
  email: string;

  @Field()
  @IsString()
  password: string;

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

  @Field()
  @IsDate()
  birthday: Date;

  @IsOptional()
  @Field({ nullable: true })
  @IsString()
  gender?: string | null;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  BI?: string | null;

  @Field({ nullable: true })
  @IsString()
  neigbhod: string | null;

  @Field()
  @IsString()
  city: string;

  @Field()
  @IsOptional()
  @Field({ nullable: true })
  nif?: string | null;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  FatherName?: string | null;

  @Field({ nullable: true })
  @IsString()
  @IsOptional()
  MotherName?: string | null;

  @Field({ nullable: true })
  type?: string;

  @Field({ nullable: true })
  avatar?: string;

  @Field({ nullable: true })
  @IsString()
  @IsOptional()
  municipality?: string | null;

  @Field({ nullable: true })
  @IsString()
  @IsOptional()
  addressComplement?: string | null;
}
