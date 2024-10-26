import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class changeDoctorPasswordInput {
  @Field({ nullable: true })
  doctorId: string;

  @Field()
  oldPassword: string;

  @Field()
  newPassword: string;
}
