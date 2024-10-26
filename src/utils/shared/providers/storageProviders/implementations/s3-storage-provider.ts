// import { Injectable } from '@nestjs/common';
// import fs from 'fs';
// import mime from 'mime';
// import path from 'path';
// import * as aws from 'aws-sdk';
// import uploadConfig from '../../../../../config/upload';
// import { IStorageProvider } from '../interfaces/IstorageProvider';

// @Injectable()
// export class S3StorageProvider implements IStorageProvider {
//   private client: aws.S3;

//   constructor() {
//     this.client = new aws.S3({
//       region: 'us-east-1',
//     });
//   }

//   async saveFile(file: string): Promise<string> {
//     const originalPath = path.resolve(uploadConfig.tmpFolder, file);

//     const ContentType = mime.getType(originalPath);

//     if (!ContentType) {
//       throw new Error('File not found');
//     }

//     const fileContent = await fs.promises.readFile(originalPath);

//     await this.client
//       .putObject({
//         Bucket: uploadConfig.config.aws.bucket,
//         Key: file,
//         ACL: 'public-read',
//         Body: fileContent,
//         ContentType,
//       })
//       .promise();

//     await fs.promises.unlink(originalPath);

//     return file;
//   }

//   async deleteFile(file: string): Promise<void> {
//     await this.client
//       .deleteObject({
//         Bucket: uploadConfig.config.aws.bucket,
//         Key: file,
//       })
//       .promise();
//   }
// }

console.log('s3 implmementations');
