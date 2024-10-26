import { BadRequestException, Injectable } from '@nestjs/common';
import { extname } from 'path';
import { createSupabaseClient } from 'src/utils/shared/providers/storageProviders/implementations/supaBase/supaBaseConfig';
import { IURestUploadRepository } from '../repository/interface/IUploadRepository';

@Injectable()
export class RestSuperBaseService {
  private readonly supabaseClient = createSupabaseClient();

  constructor(private userRepo: IURestUploadRepository) {}

  async saveFile(file: any, userId: string) {
    try {
      const superBaseBucket = process.env.SUPERBASE_BUCKET_NAME;
      if (!file || !file.buffer) {
        throw new BadRequestException('File ou buffer indefinido');
      }

      const buffer = file.buffer;

      const modifiedFilename = NewFileName(file.originalname);

      const { error } = await this.supabaseClient.storage
        .from(superBaseBucket)
        .upload(modifiedFilename, buffer, { upsert: true });
      await this.userRepo.update(userId, modifiedFilename);

      if (error) {
        throw new BadRequestException(
          `Falha ao fazer upload do Avatar: ${error.message}`,
        );
      }

      return { message: 'Avatar adicionado com sucesso' };
    } catch (error) {
      console.log('ERROR AVATAR:', error);
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
