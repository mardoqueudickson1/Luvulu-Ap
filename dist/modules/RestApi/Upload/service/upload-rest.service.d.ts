import { IURestUploadRepository } from '../repository/interface/IUploadRepository';
export declare class RestSuperBaseService {
    private userRepo;
    private readonly supabaseClient;
    constructor(userRepo: IURestUploadRepository);
    saveFile(file: any, userId: string): Promise<{
        message: string;
    }>;
}
