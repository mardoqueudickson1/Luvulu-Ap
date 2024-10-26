import { BadRequestException } from '@nestjs/common';
import { FileDTO, FileResponse } from '../../dtos/file.dto';
import { IStorageProvider } from '../../interfaces/IstorageProvider';
import createClient from '@supabase/supabase-js';

export class SuperBaseProviderRepository implements IStorageProvider {
  private readonly superBaseClient = createClient;

  async saveFile(file: FileDTO): Promise<FileResponse> {
    const supabaseURL = process.env.SUPABASE_URL;
    const supabaseKEY = process.env.SUPABASE_KEY;
    const superBaseBucket = process.env.SUPERBASE_BUCKET_NAME;

    const superBase = this.superBaseClient.createClient(
      supabaseURL,
      supabaseKEY,
      {
        auth: {
          persistSession: false,
        },
      },
    );

    const { data, error } = await superBase.storage
      .from(superBaseBucket)
      .upload(file.originalname, file.buffer, { upsert: true });

    if (error) {
      throw new BadRequestException('Ups, houve um erro ao fazer upload');
    }

    const result: FileResponse = {
      path: data.path,
    };
    return result;
  }

  async deleteFile(file: FileDTO): Promise<void> {
    const supabaseURL = process.env.SUPABASE_URL;
    const supabaseKEY = process.env.SUPABASE_KEY;
    const superBaseBucket = process.env.SUPERBASE_BUCKET_NAME;

    const superBase = this.superBaseClient.createClient(
      supabaseURL,
      supabaseKEY,
      {
        auth: {
          persistSession: false,
        },
      },
    );

    const { error } = await superBase.storage
      .from(superBaseBucket)
      .remove([file.originalname]);

    if (error) {
      throw new BadRequestException('Falha ao excluir o avatar');
    }
  }
}
