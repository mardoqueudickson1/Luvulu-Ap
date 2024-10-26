import { ObjectType, Field } from '@nestjs/graphql';
import { ConsultationType } from '@prisma/client';

@ObjectType()
export class ConsultationTypes implements ConsultationType {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field()
  description: string;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;

  @Field()
  deletedAt: boolean;
}
