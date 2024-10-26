import { ObjectType, Field } from '@nestjs/graphql';
import { Services } from '@prisma/client';

@ObjectType()
export class ServicesClinics implements Services {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field()
  description: string;

  @Field()
  price: number;

  @Field()
  institutionId: string;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;

  @Field()
  deletedAt: boolean;
}
