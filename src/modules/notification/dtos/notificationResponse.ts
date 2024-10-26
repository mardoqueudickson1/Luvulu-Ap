import { Field, ObjectType } from '@nestjs/graphql';

import { Users } from 'src/modules/user/entities/user';

@ObjectType()
export class userNotifications {
  @Field({ nullable: true })
  id: string;

  @Field({ nullable: true })
  name: string;

  @Field({ nullable: true })
  email: string;

  @Field({ nullable: true })
  nationality: string | null;

  @Field({ nullable: true })
  nif: string | null;

  @Field({ nullable: true })
  FatherName: string | null;

  @Field({ nullable: true })
  MotherName: string | null;

  @Field({ nullable: true })
  avatar: string;

  @Field({ nullable: true })
  municipality: string | null;

  @Field({ nullable: true })
  city: string | null;

  @Field({ nullable: true })
  neigbhod: string | null;
}

@ObjectType()
export class userPatientNotifications {
  @Field({ nullable: true })
  number: number;

  @Field()
  patient: Users;
}

@ObjectType()
export class userDoctorNotifications {
  @Field()
  isOnVacation: boolean;

  @Field()
  registrationNumber: number;

  @Field()
  specialty: string;

  @Field()
  bio: string;

  @Field()
  doctors: Users;
}

@ObjectType()
export class userInstitutionNotifications {
  // @Field()
  // clinicLatitude: string;

  // @Field()
  // cliniclongitude: string;

  @Field()
  institutions: Users;
}

@ObjectType()
export class NotificationResponse {
  @Field()
  id: string;

  @Field()
  content: string;

  @Field()
  read: boolean;

  @Field({ nullable: true })
  doctor_id: string;

  @Field({ nullable: true })
  patient_id: string;

  @Field({ nullable: true })
  institution_id: string;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;

  @Field()
  deletedAt: boolean;

  @Field()
  patient: userNotifications;

  @Field()
  institutions: userNotifications;

  @Field()
  doctors: userNotifications;
}
