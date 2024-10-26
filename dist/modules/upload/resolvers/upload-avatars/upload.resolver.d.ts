import * as uploadType from 'graphql-upload/Upload.js';
import { SuperBaseService } from '../../usecases/upload-avatar/upload-user-avatar.service';
export declare class UploadFileResolver {
    private readonly repo;
    constructor(repo: SuperBaseService);
    uploadImage(image: uploadType, user: any): Promise<{
        message: string;
    }>;
}
