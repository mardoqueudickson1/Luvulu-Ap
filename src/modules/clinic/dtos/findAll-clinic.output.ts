import { ObjectType, Field } from '@nestjs/graphql';
import {
  ResponseClinicRating,
  ServiceClinic,
} from 'src/modules/clinicRating/dtos/reponseClinicRating';

@ObjectType()
class UserClinic {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field()
  email: string;

  @Field()
  nationality: string;

  @Field()
  Role: string;

  @Field()
  phone: string;

  @Field()
  neigbhod: string;

  @Field()
  city: string;

  @Field()
  nif: string;

  @Field()
  municipality: string;

  @Field()
  addressComplement: string;

  @Field({ nullable: true })
  avatar?: string | null;
}

// @ObjectType()
// export class ServicesClinic {
//   @Field()
//   name: string;
// }

@ObjectType()
export class ClinicOutput {
  @Field()
  user: UserClinic;

  @Field()
  clinicLatitude?: string;

  @Field()
  cliniclongitude?: string;
}

@ObjectType()
export class ClinicResponse {
  @Field()
  id: string;

  @Field()
  user: UserClinic;

  @Field()
  clinicLatitude?: string;

  @Field()
  cliniclongitude?: string;
}

@ObjectType()
export class NearByclinicResponse {
  @Field()
  user: UserClinic;

  @Field({ nullable: true })
  distance?: number;

  @Field({ nullable: true })
  time?: string;

  @Field({ nullable: true })
  distanceInKm?: string;

  @Field(() => [ResponseClinicRating], { nullable: true })
  rating?: ResponseClinicRating[];

  @Field(() => String)
  averageRating?: string | number;

  @Field(() => String)
  totalRating?: string | number;

  @Field(() => [ServiceClinic], { nullable: true })
  services?: ServiceClinic[];

  @Field(() => [ResponseClinicRating], { nullable: true })
  clinicRating?: ResponseClinicRating[];
}
