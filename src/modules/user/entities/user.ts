import { Field, ObjectType, registerEnumType } from '@nestjs/graphql';
import { RoleType, User } from '@prisma/client';

registerEnumType(RoleType, {
  name: 'RoleType',
});

@ObjectType()
export class Users implements User {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field()
  email: string;

  @Field()
  // @HideField()
  password: string;

  @Field({ nullable: true })
  nationality: string | null;

  @Field()
  Role: RoleType;

  @Field()
  phone: string;

  @Field({ nullable: true })
  birthday: Date | null;

  @Field({ nullable: true })
  gender: string | null;

  @Field({ nullable: true })
  BI: string | null;

  @Field()
  neigbhod: string;

  @Field()
  city: string;

  @Field({ nullable: true })
  nif: string | null;

  @Field({ nullable: true })
  FatherName: string | null;

  @Field({ nullable: true })
  MotherName: string | null;

  @Field({ nullable: true })
  type: string;

  @Field({ nullable: true })
  avatar: string;

  @Field({ nullable: true })
  municipality: string | null;

  @Field({ nullable: true })
  addressComplement: string | null;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;

  @Field()
  deletedAt: boolean;
}
