import { Field } from '@nestjs/graphql';

export class ResponsePatientAvatarOutput {
  @Field({ nullable: true })
  patientId: string;

  @Field()
  avatarFilename: string;
}
