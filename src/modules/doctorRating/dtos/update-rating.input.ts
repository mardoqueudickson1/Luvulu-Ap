import { InputType, Field, PartialType } from '@nestjs/graphql';
import { CreateRatingInput } from './create-rating.input';

@InputType()
export class updateRating extends PartialType(CreateRatingInput) {
  @Field({ nullable: true })
  id?: string;
}
