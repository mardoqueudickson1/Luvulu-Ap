import { ObjectType, Field } from '@nestjs/graphql';
import { ResponseClinicRating } from './reponseClinicRating';
import { InstitutionTypes, UserInfos } from './topRatedClinic';

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
  user: UserInfos;

  @Field(() => [ResponseClinicRating])
  rating: ResponseClinicRating[];

  @Field()
  totalRating: number;
}
