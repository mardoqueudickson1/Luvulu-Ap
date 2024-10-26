/// <reference types="node" />
import { S3 } from 'aws-sdk';
export declare class FileService {
    constructor();
    uploadFile(imageBuffer: Buffer, fileName: string): Promise<S3.ManagedUpload>;
    deleteFile(key: string): Promise<import("aws-sdk/lib/request").PromiseResult<S3.DeleteObjectOutput, import("aws-sdk").AWSError>>;
}
