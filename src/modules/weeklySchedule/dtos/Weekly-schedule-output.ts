import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class WeeklyScheduleOutput {
  @Field()
  doctorId: string;

  @Field()
  institutionId: string;

  @Field()
  dayOfWeek: string;

  @Field()
  startTime: string;

  @Field()
  endTime: string;

  @Field()
  interval: number;
}
