import { InputType, Field } from '@nestjs/graphql';
import { AppointmentStatus } from '@prisma/client';

@InputType()
export class ChangeppointStatus {
  @Field({ nullable: true })
  appointmantId: string;

  @Field()
  status: AppointmentStatus;
}
