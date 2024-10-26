/// <reference types="multer" />
import { SuperBaseService } from '../../usecases/upload-avatar/upload-user-avatar.service';
export declare class AppController {
    private readonly repo;
    constructor(repo: SuperBaseService);
    uploadFile(file: Express.Multer.File, user: any): Promise<{
        message: string;
    }>;
}
