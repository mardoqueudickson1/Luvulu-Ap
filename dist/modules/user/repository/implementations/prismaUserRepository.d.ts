import { PrismaService } from '../../../prisma/prisma.service';
import { CreateUserInput } from '../../dtos/create-user.input';
import { Users } from '../../entities/user';
import { IUserRepository } from '../interface/IUserRepository';
import { UpdateUserInput } from '../../dtos/update-user.input';
export declare class PrismaUserRepositoy implements IUserRepository {
    private prisma;
    constructor(prisma: PrismaService);
    create(userInput: CreateUserInput): Promise<Users>;
    findByEmail(email: string): Promise<Users>;
    findById(id: string): Promise<Users>;
    findByPacientId(userID: string): Promise<any>;
    remove({ id }: {
        id: string;
    }): Promise<void>;
    findAll(): Promise<Users[]>;
    update(id: string, user: UpdateUserInput): Promise<Users>;
}
