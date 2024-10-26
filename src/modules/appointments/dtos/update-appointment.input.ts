import { InputType, Field, PartialType } from '@nestjs/graphql';
import { CreateAppointInput } from './create-appointment.input';

@InputType()
export class UpdateAppointmentInput extends PartialType(CreateAppointInput) {
  @Field(() => String)
  id: string;
}
