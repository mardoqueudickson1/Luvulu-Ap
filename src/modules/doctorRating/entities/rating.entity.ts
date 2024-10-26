import { ObjectType, Field } from '@nestjs/graphql';
import { Rating } from '@prisma/client';

@ObjectType()
export class Ratings implements Rating {
  @Field()
  id: string;

  @Field()
  userId: string;

  @Field()
  doctorId: string;

  @Field({ nullable: true })
  appoitmentID: string | null;

  // @Field()
  // agendamentoId: string;

  @Field()
  rate: number;

  @Field()
  comment: string;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;

  @Field()
  deletedAt: boolean;
}
