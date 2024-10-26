import { FindFileService } from '../../usecases/find/find-user-avatar.service';
export declare class FindResolverResolver {
    private readonly repo;
    constructor(repo: FindFileService);
    PhotoName(photo: string): Promise<string>;
}
