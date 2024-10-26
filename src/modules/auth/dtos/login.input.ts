import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class LoginInput {
  @IsNotEmpty()
  @IsString()
  @Field(() => String, {})
  email: string;

  @IsNotEmpty()
  @IsString()
  @Field(() => String, {})
  password: string;

  @Field({ nullable: true })
  fcmToken?: string;
}
