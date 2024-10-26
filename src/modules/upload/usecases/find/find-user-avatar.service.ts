import { Injectable } from '@nestjs/common';
import { findSupabaseFileService } from 'src/utils/shared/providers/storageProviders/implementations/supaBase/findPhotoFile';
import { createSupabaseClient } from 'src/utils/shared/providers/storageProviders/implementations/supaBase/supaBaseConfig';

@Injectable()
export class FindFileService {
  private readonly supabaseClient = createSupabaseClient();

  async getPhotoUrl(fileName: string): Promise<string> {
    const findFilefind = await findSupabaseFileService.getPhotoUrl(fileName);
    return findFilefind;
  }
}
