import { InputType, Field, PartialType } from '@nestjs/graphql';
import { CreateNotificationInput } from './create-notification.input';

@InputType()
export class UpdateNotificationInput extends PartialType(
  CreateNotificationInput,
) {
  @Field(() => String)
  id: string;
}
