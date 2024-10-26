import { Field, InputType, PartialType } from '@nestjs/graphql';
import { WeeklyScheduleDTO } from './create-Weekly-schedule-input';

@InputType()
export class UpdateWeeklySchedule extends PartialType(WeeklyScheduleDTO) {
  @Field()
  id: string;
}
