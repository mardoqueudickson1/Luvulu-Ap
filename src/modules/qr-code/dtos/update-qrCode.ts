import { InputType, Field, PartialType } from '@nestjs/graphql';
import { CreateQrcodeInput } from './create-qrCode';

@InputType()
export class UpdateQrCode extends PartialType(CreateQrcodeInput) {
  @Field(() => String, { nullable: true })
  id?: string;
}
