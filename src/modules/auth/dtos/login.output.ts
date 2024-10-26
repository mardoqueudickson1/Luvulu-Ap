import { Users } from '../../user/entities/user';
import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class LoginOutput {
  @Field(() => String, {})
  token: string;

  @Field()
  expiresIn: number;

  @Field(() => Users, {})
  user: Users;
}
