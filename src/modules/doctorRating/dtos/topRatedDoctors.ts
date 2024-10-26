import { ObjectType, Field } from '@nestjs/graphql';
import { ResponseRating } from './reponseRating';

export type InstitutionResult = {
  id: string;
  name: string;
  city: string;
  municipality: string;
  neigbhod: string;
};

@ObjectType()
export class UserInfo {
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
  municipality: string | null;

  @Field({ nullable: true })
  avatar?: string | null;

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
export class TopResponseAllDoctor {
  @Field()
  specialty?: string;

  @Field()
  bio?: string;

  @Field()
  pacientCared?: string;

  @Field()
  registrationNumber?: number;

  @Field({ nullable: true })
  isFavorited?: boolean;

  @Field(() => UserInfo)
  user: UserInfo;

  @Field(() => String)
  averageRating?: string | number;

  @Field(() => String)
  totalRating?: string | number;

  @Field(() => [Institution])
  institutions?: Institution[];

  @Field(() => [ResponseRating])
  rating: ResponseRating[];
}

@ObjectType()
export class InstitutionTypes {
  @Field()
  id: string;

  @Field()
  city: string;

  @Field()
  municipality: string;

  @Field()
  name: string;
}

@ObjectType()
export class ResponseRatedDoctor {
  @Field()
  id: string;

  @Field()
  specialty: string;

  @Field()
  institutionId: string;

  @Field()
  bio: string;

  @Field()
  registrationNumber: number;

  @Field()
  institutions: InstitutionTypes;

  @Field()
  user: UserInfo;

  @Field(() => [ResponseRating])
  rating: ResponseRating[];

  @Field()
  totalRating: number;
}
