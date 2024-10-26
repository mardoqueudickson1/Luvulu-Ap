import { FileDTO, FileResponse } from '../dtos/file.dto';
export declare abstract class IStorageProvider {
    abstract saveFile(file: FileDTO): Promise<FileResponse>;
    abstract deleteFile(file: FileDTO): Promise<void>;
}
