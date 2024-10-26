import { CreateUserInput } from '../../dtos/create-user.input';
import { UpdateUserInput } from '../../dtos/update-user.input';
import { Users } from '../../entities/user';
export declare abstract class IUserRepository {
    abstract create(data: CreateUserInput): Promise<Users>;
    abstract findById(id: string): Promise<Users>;
    abstract remove({ id }: {
        id: string;
    }): Promise<void>;
    abstract findAll(): Promise<Users[]>;
    abstract update(id: string, user: UpdateUserInput): Promise<Users>;
    abstract findByEmail(email: string): Promise<Users | null>;
    abstract findByPacientId(userID: string): Promise<any>;
}
