import { InputType, Field, Int } from '@nestjs/graphql';

export type FileDTO = {
  fieldname: string;
  originalname: string;
  mimetype: string;
  buffer: Buffer;
  size: number;
};

@InputType()
export class FileUploadType {
  @Field()
  fieldname?: string;

  @Field()
  originalname?: string;

  @Field()
  mimetype?: string;

  buffer?: Buffer;

  @Field()
  size?: number;
}
