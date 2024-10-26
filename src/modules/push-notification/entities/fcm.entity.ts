import { Field, ObjectType } from '@nestjs/graphql';
import { FCMToken } from '@prisma/client';

@ObjectType()
export class fcmTokens implements FCMToken {
  @Field()
  id: string;

  @Field()
  userId: string;

  @Field()
  token: string;
}
