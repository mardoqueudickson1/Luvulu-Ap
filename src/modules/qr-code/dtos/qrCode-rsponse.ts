import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class QrcodeResponse {
  @Field()
  id: string;

  @Field()
  code: string;

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
  BI: string;

  @Field()
  municipality: string;

  @Field()
  addressComplement: string;
}
