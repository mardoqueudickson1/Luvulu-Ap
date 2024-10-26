import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateFavorite {
  @Field()
  pacientId: string;

  @Field({ nullable: true })
  doctorId?: string;

  @Field({ nullable: true })
  institutionId?: string;
}

@InputType()
export class CreateFavoriteInput {
  @Field({ nullable: true })
  pacientId?: string;

  @Field({ nullable: true })
  doctorId?: string;

  @Field({ nullable: true })
  institutionId?: string;
}

@InputType()
export class RemoveFavorite {
  @Field({ nullable: true })
  id?: string;

  @Field({ nullable: true })
  pacientId?: string;

  @Field({ nullable: true })
  doctorId?: string;

  @Field({ nullable: true })
  institutionId?: string;
}
