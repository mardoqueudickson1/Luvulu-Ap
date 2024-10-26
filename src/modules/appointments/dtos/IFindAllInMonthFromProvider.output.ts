import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class IFindAllInMonthFromProvider {
  @Field()
  doctorId: string;

  @Field()
  month: number;

  @Field()
  year: number;
}
