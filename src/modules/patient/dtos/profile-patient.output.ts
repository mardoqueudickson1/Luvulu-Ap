import { Field, ObjectType } from '@nestjs/graphql';
import { Users } from 'src/modules/user/entities/user';

@ObjectType()
export class PatientProfileOutput {
  @Field()
  number: number;

  @Field({ nullable: true })
  qrCode?: string | null;

  @Field()
  user: Users;

  @Field(() => [String], { nullable: true })
  pacientCardID: string[];
}
