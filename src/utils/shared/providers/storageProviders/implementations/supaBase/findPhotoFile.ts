import { createSupabaseClient } from './supaBaseConfig';

class FindSupaBAseFileService {
  private readonly supabaseClient = createSupabaseClient();
  private readonly defaultAvatar = undefined;

  async getPhotoUrl(fileName: string): Promise<string> {
    const superBaseBucket = process.env.SUPERBASE_BUCKET_NAME;

    try {
      const { data, error } = await this.supabaseClient.storage
        .from(superBaseBucket)
        .createSignedUrl(fileName, 60);

      if (error) {
        console.log(`Foto não encontrada!`);
        return this.defaultAvatar;
      }

      const photoUrl = data.signedUrl;
      console.log(photoUrl);
      return photoUrl;
    } catch (error) {
      console.error(
        `Erro ao obter URL da foto: ${error.message}. Retornando avatar padrão.`,
      );
      return this.defaultAvatar;
    }
  }
}

export const findSupabaseFileService = new FindSupaBAseFileService();
