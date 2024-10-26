import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class IFindAllInDayFromProvider {
  @Field()
  doctorId: string;

  @Field()
  day: number;

  @Field()
  month: number;

  @Field()
  year: number;
}
