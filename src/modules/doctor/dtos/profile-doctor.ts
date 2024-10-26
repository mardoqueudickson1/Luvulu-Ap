import { Field, ObjectType } from '@nestjs/graphql';
import { Users } from 'src/modules/user/entities/user';

@ObjectType()
export class DoctorAppointmentsPatients {
  @Field()
  patients: Users;
}

@ObjectType()
export class ResponseProfileDoctor {
  @Field()
  id: string;

  @Field()
  specialty: string;

  @Field()
  registrationNumber?: number;

  @Field()
  bio: string;

  @Field()
  user: Users;
}
