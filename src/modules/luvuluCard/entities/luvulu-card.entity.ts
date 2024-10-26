import { ObjectType, Field } from '@nestjs/graphql';
import { CardStatus, PatientCard } from '@prisma/client';

@ObjectType()
export class LuvuluCard implements PatientCard {
  @Field()
  id: string;

  @Field()
  patientId: string;

  @Field()
  clinicId: string;

  @Field()
  qrCode: string;

  @Field()
  cardNumber: string;

  @Field()
  status: CardStatus;

  @Field({ nullable: true })
  issuedOn: Date | null;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;

  @Field()
  deletedAt: boolean;
}
