import { InputType, Field } from '@nestjs/graphql';
import { IsString } from 'class-validator';

@InputType()
export class CreateConsultatinoTypeInput {
  @Field()
  name: string;

  @Field({ nullable: true })
  @IsString()
  description?: string;
}
