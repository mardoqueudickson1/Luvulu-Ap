import { Field, ObjectType } from '@nestjs/graphql';
import { PasswordConfirmationCode } from '@prisma/client';

@ObjectType()
export class ConfirmationsCode implements PasswordConfirmationCode {
  @Field()
  id: string;

  @Field()
  userId: string;

  @Field()
  code: string;

  @Field()
  expiresAt: Date;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;

  @Field()
  deletedAt: boolean;
}
