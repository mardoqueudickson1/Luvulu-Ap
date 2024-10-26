import { FileDTO, FileResponse } from '../dtos/file.dto';

export abstract class IStorageProvider {
  abstract saveFile(file: FileDTO): Promise<FileResponse>;
  abstract deleteFile(file: FileDTO): Promise<void>;
}
