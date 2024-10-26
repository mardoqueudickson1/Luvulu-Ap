import { Field, ObjectType } from '@nestjs/graphql';
import { Users } from 'src/modules/user/entities/user';

@ObjectType()
export class InstitutionType {
  @Field(() => [String])
  name: string[];
}

@ObjectType()
export class ResponseDoctor {
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
  institution: InstitutionType;

  @Field()
  user: Users;
}

export type ProfileDoctor = {
  Doctor: {
    bio: string;
    specialty: string;
    registrationNumber: number;
  };
};

export type ResponseUser = {
  Institution: {
    id: string;
  };
  Doctor: {
    id: string;
  };
};
