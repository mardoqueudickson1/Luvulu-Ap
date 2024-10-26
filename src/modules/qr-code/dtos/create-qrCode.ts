import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateQrcodeInput {
  @Field()
  code: string;

  @Field()
  patientId?: string;
}

@InputType()
export class CreateQrcode {
  @Field()
  code: string;

  @Field()
  patientId: string;
}
