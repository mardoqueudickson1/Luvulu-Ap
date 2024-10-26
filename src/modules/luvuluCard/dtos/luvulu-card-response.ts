import { InputType, Field, ObjectType } from '@nestjs/graphql';
import { CardStatus } from '@prisma/client';

@InputType()
export class UserCardInfo {
  @Field()
  name: string;
}

@ObjectType()
export class CreateLuvuluCardResponse {
  @Field()
  patient: string;

  @Field()
  qrCode?: string;

  @Field()
  cardNumber: string;
}

@ObjectType()
export class LuvuluCardResponse {
  @Field()
  id: string;

  @Field()
  pacientId?: string;

  @Field()
  name?: string;

  @Field()
  qrCode?: string;

  @Field()
  cardNumber?: string;

  @Field()
  status: CardStatus;
}
