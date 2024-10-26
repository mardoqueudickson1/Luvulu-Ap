import { Users } from 'src/modules/user/entities/user';

export abstract class IUploadRepository {
  abstract update(id: string, avatar: string): Promise<Users>;
}