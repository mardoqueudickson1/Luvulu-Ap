import { Field, InputType } from '@nestjs/graphql';

import { IsInt, IsNotEmpty, Min } from 'class-validator';

@InputType()
export class WeeklyScheduleDTO {
  @Field({ nullable: true })
  doctorId: string;

  @IsNotEmpty()
  @Field()
  institutionId: string;

  @IsNotEmpty()
  @Field()
  dayOfWeek: Date;

  @IsNotEmpty()
  @Field()
  startTime: Date;

  @IsNotEmpty()
  @Field()
  endTime: Date;

  @IsNotEmpty()
  @IsInt()
  @Field()
  interval: number;

  @IsNotEmpty()
  @IsInt()
  @Min(1)
  @Field()
  dailyWorkingHours: number;
}
