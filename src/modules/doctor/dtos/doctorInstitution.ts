import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class AssociateDoctorInput {
  @Field()
  doctorId: string;

  @Field({ nullable: true })
  institutionId?: string;
}

export class AssociateDoctorResponse {
  @Field({ nullable: true })
  doctorId?: string;

  @Field()
  institutionId: string;
}
