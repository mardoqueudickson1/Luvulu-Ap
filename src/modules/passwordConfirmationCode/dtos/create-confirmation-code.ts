import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateConfirmationCode {
  @Field()
  userId: string;

  @Field()
  code: string;

  @Field()
  expiresAt: Date;
}
