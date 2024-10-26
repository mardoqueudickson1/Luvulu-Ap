import { InputType, Field, PartialType } from '@nestjs/graphql';
import { CreateClinicRatingInput } from './create-rating-clinic.input';

@InputType()
export class updateClinicRating extends PartialType(CreateClinicRatingInput) {
  @Field({ nullable: true })
  id?: string;
}
