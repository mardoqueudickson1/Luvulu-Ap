import { ObjectType, Int, Field } from '@nestjs/graphql';

@ObjectType()
export class UserOutput {
  @Field(() => String)
  id: string;

  @Field(() => String)
  name: string;

  // Adicione outros campos do usuário aqui, se necessário
}

@ObjectType()
export class DoctorOutput {
  @Field(() => String)
  id: string;

  @Field(() => String)
  bio: string;

  @Field(() => UserOutput)
  user: UserOutput;
}

@ObjectType()
export class institutionOutput {
  @Field(() => String)
  id: string;

  @Field(() => UserOutput)
  user: UserOutput;
}

@ObjectType()
export class DoctorScheduleOutput {
  @Field(() => Int)
  dayOfWeek: number;

  @Field(() => DoctorOutput)
  doctor: DoctorOutput;

  @Field(() => institutionOutput)
  institution: institutionOutput;

  @Field(() => [String])
  hours: string[];
}
