import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class fcmTokenInput {
  @Field({ nullable: true })
  userId?: string;

  @Field()
  token: string;
}

@InputType()
export class fcmToken {
  @Field({ nullable: true })
  userId: string;

  @Field()
  token: string;
}

@InputType()
export class fcmTokenUpdate {
  @Field()
  id: string;

  @Field({ nullable: true })
  userId: string;

  @Field()
  token: string;
}
