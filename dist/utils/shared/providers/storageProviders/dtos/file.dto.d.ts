/// <reference types="node" />
export type FileDTO = {
    fieldname: string;
    originalname: string;
    mimetype: string;
    buffer: Buffer;
    size: number;
};
export interface FileResponse {
    path: string;
    message?: string;
}
