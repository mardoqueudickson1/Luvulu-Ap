/// <reference types="node" />
export type FileDTO = {
    fieldname: string;
    originalname: string;
    mimetype: string;
    buffer: Buffer;
    size: number;
};
export declare class FileUploadType {
    fieldname?: string;
    originalname?: string;
    mimetype?: string;
    buffer?: Buffer;
    size?: number;
    message?: string;
}
export declare class FileUploadOuput {
    message?: string;
}
