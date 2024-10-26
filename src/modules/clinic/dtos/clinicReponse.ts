import { Field, ObjectType } from '@nestjs/graphql';

import { Users } from 'src/modules/user/entities/user';

@ObjectType()
export class ResponseClinic {
  @Field()
  id: string;

  @Field()
  user: Users;
}

export type ProfileClinic = {
  Clinic: {
    id: string;
  };
};

export type ResponseUser = {
  Clinic: {
    id: string;
  };
};
