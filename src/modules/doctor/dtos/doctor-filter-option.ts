import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class DoctorFilterOptions {
  @Field()
  speciality: string;

  @Field()
  gender: string;

  @Field()
  neighbor: string;

  @Field()
  city: string;

  @Field()
  starts: number;
}
