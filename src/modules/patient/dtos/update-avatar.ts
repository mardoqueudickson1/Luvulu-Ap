import { Field } from '@nestjs/graphql';

export class UpdateAvatarInput {
  @Field({ nullable: true })
  patientId: string;

  @Field()
  avatarFilename: string;
}
