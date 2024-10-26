import { Field, ObjectType } from '@nestjs/graphql';
import { WeeklySchedule } from '@prisma/client';

@ObjectType()
export class WeeklySchedules implements WeeklySchedule {
  @Field()
  id: string;

  @Field()
  doctorId: string;

  @Field()
  institutionId: string;

  @Field()
  dayOfWeek: Date;

  @Field()
  startTime: Date;

  @Field()
  endTime: Date;

  @Field()
  interval: number;

  @Field()
  dailyWorkingHours: number;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
