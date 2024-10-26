import { Field, ObjectType } from '@nestjs/graphql';
import { Appointments } from 'src/modules/appointments/entities/appointments.entity';

@ObjectType()
export class DoctorsResponse {
  @Field(() => String)
  id: string;

  @Field(() => String)
  name: string;

  @Field(() => String)
  phone: string;

  @Field(() => String)
  email: string | null;

  @Field(() => String)
  gender: string | null;

  @Field(() => Date)
  birthday: Date | null;

  @Field(() => String)
  nationality: string;

  @Field({ nullable: true })
  avatar?: string | null;

  @Field()
  city: string;

  @Field(() => String)
  municipality: string;
}

@ObjectType()
export class GetMedicalHsitoryByPatientIdOutput {
  @Field()
  id: string;

  @Field()
  appointmentId: string;

  @Field(() => Appointments)
  appointment: Appointments;

  @Field(() => DoctorsResponse)
  doctor: DoctorsResponse;
}
