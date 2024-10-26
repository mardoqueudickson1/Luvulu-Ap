import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class changePasswordInput {
  @Field({ nullable: true })
  patientId: string;

  @Field()
  oldPassword: string;

  @Field()
  newPassword: string;
}
