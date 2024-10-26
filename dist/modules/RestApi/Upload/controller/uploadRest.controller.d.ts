/// <reference types="multer" />
import { RestSuperBaseService } from '../service/upload-rest.service';
export declare class UploadRestController {
    private readonly repo;
    constructor(repo: RestSuperBaseService);
    uploadFile(file: Express.Multer.File, user: any): Promise<{
        message: string;
    }>;
}
