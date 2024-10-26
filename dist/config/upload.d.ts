import * as multer from 'multer';
interface IUploadConfig {
    driver: 's3' | 'disk';
    tmpFolder: string;
    uploadsFolder: string;
    multer: {
        storage: multer.StorageEngine;
    };
    config: {
        aws: {
            bucket: string;
        };
    };
}
declare const _default: IUploadConfig;
export default _default;
