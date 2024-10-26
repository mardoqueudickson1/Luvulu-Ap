import { Users } from 'src/modules/user/entities/user';
export declare abstract class IURestUploadRepository {
    abstract update(id: string, avatar: string): Promise<Users>;
}
