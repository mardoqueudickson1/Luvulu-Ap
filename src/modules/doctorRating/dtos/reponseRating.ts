import { Field, ObjectType, InputType } from '@nestjs/graphql';
import { UserInfo } from './topRatedDoctors';

@ObjectType()
export class ResponseRating {
  @Field()
  id: string;

  @Field()
  userId: string;

  @Field()
  doctorId: string;

  @Field()
  rate: number;

  @Field()
  comment: string;

  @Field(() => UserInfo)
  user?: UserInfo;
}
@InputType()
export class ResponseDoctorType {
  @Field({ nullable: true })
  userId?: string;

  @Field()
  doctorId: string;
}
