import { Injectable } from '@nestjs/common';
import { S3 } from 'aws-sdk';
import { uuid } from 'uuidv4';
@Injectable()
export class FileService {
  constructor() {}

  async uploadFile(imageBuffer: Buffer, fileName: string) {
    const s3 = new S3();
    const upload = await s3.upload({
      Bucket: process.env.S3_BUCKET_NAME,
      Body: imageBuffer,
      Key: `${uuid()}- ${fileName}`,
    });

    return upload;
  }

  public async deleteFile(key: string) {
    const s3 = new S3();
    return await s3
      .deleteObject({
        Bucket: process.env.BUCKET_NAME!,
        Key: key,
      })
      .promise();
  }
}
