import { ObjectType, Field } from '@nestjs/graphql';

export type FavoriteData = {
  id: string;
  name: string;
  city: string;
  municipality: string;
  specialty?: string;
  avatar?: string;
};

@ObjectType()
export class DoctorInfor {
  @Field({ nullable: true })
  id: string;

  @Field()
  name: string;

  @Field()
  city: string;

  @Field()
  municipality: string;

  @Field({ nullable: true })
  specialty?: string;

  @Field({ nullable: true })
  avatar?: string;
}

@ObjectType()
export class InstitutionInformations {
  @Field({ nullable: true })
  id: string;

  @Field()
  name: string;

  @Field()
  city: string;

  @Field()
  municipality: string;

  @Field({ nullable: true })
  avatar?: string;
}

@ObjectType()
export class ResponseAllFavotites {
  @Field(() => [DoctorInfor])
  doctors: DoctorInfor[];

  @Field(() => [InstitutionInformations])
  institutions: InstitutionInformations[];
}
