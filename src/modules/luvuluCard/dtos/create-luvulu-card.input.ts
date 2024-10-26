import { InputType, Field } from '@nestjs/graphql';
import { CardStatus } from '@prisma/client';

@InputType()
export class CreateLuvuluCard {
  @Field({ nullable: true })
  patientId?: string;

  @Field()
  clinicId: string;

  @Field({ nullable: true })
  qrCode?: string;

  @Field({ nullable: true })
  cardNumber?: string;

  @Field({ nullable: true })
  status?: CardStatus;

  @Field({ nullable: true })
  issuedOn?: Date;
}

@InputType()
export class CreateLuvuluCardInput {
  @Field()
  id?: string;

  @Field()
  patientId: string;

  @Field()
  qrCode: string;

  @Field()
  clinicId: string;

  @Field()
  cardNumber: string;

  @Field()
  status: CardStatus;

  @Field()
  issuedOn: Date;
}
