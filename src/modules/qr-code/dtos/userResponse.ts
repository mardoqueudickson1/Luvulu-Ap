import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class UserResponse {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field()
  email: string;

  @Field()
  birthday: Date;

  @Field()
  nationality: string;

  @Field()
  phone: string;

  @Field()
  BI: string;

  @Field()
  FatherName: string;

  @Field()
  MotherName: string;

  @Field()
  neigbhod: string;

  @Field()
  gender: string;

  @Field()
  city: string;

  @Field()
  nif: string;

  @Field()
  municipality: string;

  @Field()
  addressComplement: string;

  @Field()
  paciente_number: number;

  @Field()
  pacienteId: string;
}
