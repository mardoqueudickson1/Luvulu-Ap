import { FileDTO, FileResponse } from '../../dtos/file.dto';
import { IStorageProvider } from '../../interfaces/IstorageProvider';
export declare class SuperBaseProviderRepository implements IStorageProvider {
    private readonly superBaseClient;
    saveFile(file: FileDTO): Promise<FileResponse>;
    deleteFile(file: FileDTO): Promise<void>;
}
