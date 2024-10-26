import { ObjectType, Int, Field } from '@nestjs/graphql';

@ObjectType()
export class DoctorScheduleOutput {
  @Field(() => Int)
  dayOfWeek: Date;

  @Field(() => [String])
  hours: string[];
}
