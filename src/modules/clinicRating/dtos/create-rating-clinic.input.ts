import { InputType, Field } from '@nestjs/graphql';
import { IsNumber, IsString } from 'class-validator';

@InputType()
export class CreateClinicRatingInput {
  @Field({ nullable: true })
  userId?: string;

  @Field()
  clinicId: string;

  @Field()
  @IsNumber()
  rate: number;

  @Field({ nullable: true })
  @IsString()
  comment?: string;
}
