import { BadRequestException, Injectable } from '@nestjs/common';

import { FileResponse } from 'src/utils/shared/providers/storageProviders/dtos/file.dto';
import { extname } from 'path';
import { IUploadRepository } from '../../repository/interface/IUploadRepository';
import { createSupabaseClient } from 'src/utils/shared/providers/storageProviders/implementations/supaBase/supaBaseConfig';

@Injectable()
export class SuperBaseService {
  private readonly supabaseClient = createSupabaseClient();

  constructor(private userRepo: IUploadRepository) {}

  async saveFile(file: any, userId: string): Promise<FileResponse> {
    try {
      const superBaseBucket = process.env.SUPERBASE_BUCKET_NAME;
      if (!file || !file.createReadStream) {
        throw new BadRequestException('File or createReadStream is undefined');
      }

      const { createReadStream, filename } = await file;

      const stream = createReadStream();

      let buffer = Buffer.from('');
      stream.on('data', (chunk) => {
        buffer = Buffer.concat([buffer, chunk]);
      });

      await new Promise((resolve, reject) => {
        stream.on('end', resolve);
        stream.on('error', reject);
      });

      const modifiedFilename = NewFileName(filename);

      const { data, error } = await this.supabaseClient.storage
        .from(superBaseBucket)
        .upload(modifiedFilename, buffer, { upsert: true });

      await this.userRepo.update(userId, modifiedFilename);
      if (error) {
        throw new BadRequestException(
          `Falha ao fazer upload do arquivo: ${error.message}`,
        );
      }

      const result: FileResponse = {
        path: data.path,
      };
      return result;
    } catch (error) {
      throw new BadRequestException(
        `Erro ao fazer upload do arquivo: ${error.message}`,
      );
    }
  }
}

function NewFileName(originalname: string): string {
  const ext = extname(originalname);
  const modifiedFilename = `${Date.now()}_${RandomNumber()}${ext}`;
  return modifiedFilename;
}

function RandomNumber(): number {
  return Math.floor(Math.random() * 10000 + 10000);
}
