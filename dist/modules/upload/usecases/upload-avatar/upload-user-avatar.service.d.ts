import { IUploadRepository } from '../../repository/interface/IUploadRepository';
export declare class SuperBaseService {
    private userRepo;
    private readonly supabaseClient;
    constructor(userRepo: IUploadRepository);
    saveFile(file: any, userId: string): Promise<{
        message: string;
    }>;
}
