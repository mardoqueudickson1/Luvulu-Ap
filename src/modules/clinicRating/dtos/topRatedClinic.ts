import { ObjectType, Field } from '@nestjs/graphql';
import { ServiceClinic } from './reponseClinicRating';

export type InstitutionResults = {
  id: string;
  name: string;
  city: string;
  municipality: string;
  neigbhod: string;
};

@ObjectType()
export class UserInfos {
  @Field({ nullable: true })
  id: string;

  @Field({ nullable: true })
  name: string | null;

  @Field({ nullable: true })
  email: string | null;

  @Field({ nullable: true })
  nationality: string | null;

  @Field({ nullable: true })
  Role: string | null;

  @Field({ nullable: true })
  phone: string | null;

  @Field({ nullable: true })
  neigbhod: string | null;

  @Field({ nullable: true })
  city: string | null;

  @Field({ nullable: true })
  nif: string | null;

  @Field({ nullable: true })
  avatar?: string | null;

  @Field({ nullable: true })
  municipality: string | null;

  @Field({ nullable: true })
  addressComplement: string | null;
}

@ObjectType()
export class Institution {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field()
  city: string;

  @Field()
  municipality: string;

  @Field()
  neigbhod: string;
}

@ObjectType()
export class TopResponseAllClinic {
  @Field(() => UserInfos)
  user: UserInfos;

  @Field({ nullable: true })
  isFavorited?: boolean;

  @Field(() => String, { nullable: true })
  averageRating?: string | number;

  @Field(() => String, { nullable: true })
  totalRating?: string | number;

  @Field(() => [ServiceClinic], { nullable: true })
  services?: ServiceClinic[];

  // @Field(() => [ResponseClinicRating], { nullable: true })
  // clinicRating?: ResponseClinicRating[];

  @Field(() => Number)
  pacientsCared?: number;

  @Field(() => [Number])
  doctorRated?: number[];
}

@ObjectType()
export class InstitutionTypes {
  @Field(() => [String])
  name: string[];
}
