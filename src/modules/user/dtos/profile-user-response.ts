import { ObjectType, Field, HideField } from '@nestjs/graphql';
import { RoleType } from '@prisma/client';

@ObjectType()
export class UserProfileResponse {
  @Field({ nullable: true })
  id: string;

  @Field()
  name: string;

  @Field()
  email: string;

  @Field()
  @HideField()
  password: string;

  @Field({ nullable: true })
  birthday?: Date | null;

  @Field()
  nationality: string;

  @Field()
  Role: RoleType;

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
  nif: string;

  @Field()
  municipality: string;

  @Field({ nullable: true })
  avatar?: string;

  @Field()
  addressComplement: string;
}
