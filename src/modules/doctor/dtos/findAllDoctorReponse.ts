import { ObjectType, Int, Field } from '@nestjs/graphql';
import { IsString } from 'class-validator';

@ObjectType()
export class FindAllDoctorResponse {
  @Field(() => String)
  id: string;

  @Field(() => Int)
  patient_number: number;

  @Field(() => String)
  name: string;

  @Field(() => String)
  phone: string;

  @Field(() => String)
  email: string;

  @Field(() => String)
  gender: string;

  @Field(() => Date)
  birthday: Date;

  @Field(() => String)
  nationality: string;

  @Field({ nullable: true })
  avatar?: string;

  @Field()
  @IsString()
  city: string;

  @IsString()
  municipality: string;
}
