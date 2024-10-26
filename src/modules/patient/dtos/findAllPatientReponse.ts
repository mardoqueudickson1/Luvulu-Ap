import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
class User {
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

  @Field(() => Date)
  birthday: Date;

  @Field()
  gender: string;

  @Field()
  neigbhod: string;

  @Field()
  city: string;

  @Field()
  nif: string;

  @Field()
  FatherName: string;

  @Field()
  MotherName: string;

  @Field()
  type: string;

  @Field()
  municipality: string;

  @Field()
  addressComplement: string;
}

@ObjectType()
export class FindAllPatientResponse {
  @Field()
  id: string;

  @Field()
  number: number;

  @Field()
  user: User;
}
