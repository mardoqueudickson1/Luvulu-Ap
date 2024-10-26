import { InputType, Field } from '@nestjs/graphql';
import { IsNumber, IsString } from 'class-validator';

@InputType()
export class CreateRatingInput {
  @Field({ nullable: true })
  userId?: string;

  @Field()
  doctorId: string;

  @Field()
  @IsNumber()
  rate: number;

  @Field({ nullable: true })
  @IsString()
  comment?: string;

  @Field({ nullable: true })
  appoitmentID?: string;

  // @Field({ nullable: true })
  // agendamentoId: string;
}
