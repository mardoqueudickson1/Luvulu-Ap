import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class ClinicUpdatePasswordInput {
  @Field({ nullable: true })
  clinicId: string;

  @Field()
  oldPassword: string;

  @Field()
  newPassword: string;
}
