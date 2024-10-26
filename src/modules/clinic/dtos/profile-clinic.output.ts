import { ObjectType, Field } from '@nestjs/graphql';
import { Users } from 'src/modules/user/entities/user';

@ObjectType()
export class ProfileClinicOutput {
  // @Field()
  // type: string;

  @Field()
  user: Users;
}
