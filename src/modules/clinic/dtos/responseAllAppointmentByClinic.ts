import { ObjectType, Field } from '@nestjs/graphql';
import { AppointmentStatus } from '@prisma/client';

@ObjectType()
export class UserClinicResponse {
  @Field()
  id: string;

  @Field()
  name: string;
}

@ObjectType()
export class PatientReponsesClinic {
  @Field({ nullable: true })
  id: string;

  @Field()
  number: number;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;

  @Field(() => UserClinicResponse)
  user: UserClinicResponse;
}

@ObjectType()
export class ConsultationTypeResponseClinic {
  @Field({ nullable: true })
  id: string;

  @Field()
  name: string;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
@ObjectType()
export class DoctorsClinicResponse {
  @Field({ nullable: true })
  id: string;

  @Field()
  isOnVacation: boolean;

  @Field()
  specialty: string;

  @Field()
  bio: string;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;

  @Field()
  deletedAt: boolean;

  @Field(() => UserClinicResponse)
  user: UserClinicResponse;
}

// @ObjectType()
// export class InstitutionsReponse {
//   @Field({ nullable: true })
//   id: string;

//   @Field()
//   createdAt: Date;

//   @Field()
//   updatedAt: Date;

//   @Field()
//   user: UserClinicResponse;
// }

@ObjectType()
export class ResponseAllAppointClinic {
  @Field({ nullable: true })
  id: string;
  @Field()
  isUrgent: boolean;

  @Field()
  date: Date;

  @Field()
  doctor: DoctorsClinicResponse;

  @Field()
  patient: PatientReponsesClinic;

  @Field()
  consultationType: ConsultationTypeResponseClinic;

  @Field({ nullable: true })
  status: AppointmentStatus;

  @Field()
  symptomDescription: string;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
