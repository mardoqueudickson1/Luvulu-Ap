import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class FilterOptions {
  @Field()
  service: string;

  @Field()
  municipality: string;

  @Field()
  neighbor: string;

  @Field()
  city: string;

  @Field()
  starts: number;
}

//TODO
