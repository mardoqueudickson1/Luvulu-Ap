declare class FindSupaBAseFileService {
    private readonly supabaseClient;
    private readonly defaultAvatar;
    getPhotoUrl(fileName: string): Promise<string>;
}
export declare const findSupabaseFileService: FindSupaBAseFileService;
export {};
