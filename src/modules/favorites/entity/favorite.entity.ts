import { Field, ObjectType } from '@nestjs/graphql';
import { Favorites } from '@prisma/client';

@ObjectType()
export class Favorite implements Favorites {
  @Field({ nullable: true })
  id: string;

  @Field({ nullable: true })
  pacientId: string;

  @Field({ nullable: true })
  doctorId: string | null;

  @Field({ nullable: true })
  institutionId: string | null;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;

  @Field()
  deletedAt: boolean;

  @Field({ nullable: true })
  message?: string;
}
