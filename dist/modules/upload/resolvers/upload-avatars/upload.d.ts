import { CloudinaryService } from '../../usecases/upload-avatar/Cloudinary.service';
import { FileDTO } from '../../dtos/upload-file.input';
export declare class UploadFileResolver {
    private readonly cloudinary;
    constructor(cloudinary: CloudinaryService);
    uploadAvatar(file: FileDTO): Promise<string>;
}
