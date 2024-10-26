import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateMedicalHistoryInput {
  @Field()
  appointmentId: string;
}
