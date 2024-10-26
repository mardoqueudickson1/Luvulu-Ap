import { Field, ObjectType } from '@nestjs/graphql';
import { Users } from 'src/modules/user/entities/user';

@ObjectType()
export class ResponsePatientOutput {
  @Field()
  id: string;

  @Field()
  number: number;

  @Field()
  user: Users;
}

export type PatientProfle = {
  Patient: {
    number: string;
  };
};

export type ResponseUser = {
  patient: {
    id: string;
  };
};
