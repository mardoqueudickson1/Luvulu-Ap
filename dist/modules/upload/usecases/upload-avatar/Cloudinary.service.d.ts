import { UploadApiErrorResponse, UploadApiResponse } from 'cloudinary';
import { FileDTO } from '../../dtos/upload-file.input';
export declare class CloudinaryService {
    uploadImage(file: FileDTO): Promise<UploadApiResponse | UploadApiErrorResponse>;
}
