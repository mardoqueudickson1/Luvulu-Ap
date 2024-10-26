import { PrismaService } from '../../../prisma/prisma.service';
import { CreateUserInput } from '../../dtos/create-user.input';
import { Users } from '../../entities/user';
import { IUserRepository } from '../interface/IUserRepository';
import { Injectable } from '@nestjs/common';
import { UpdateUserInput } from '../../dtos/update-user.input';

@Injectable()
export class PrismaUserRepositoy implements IUserRepository {
  constructor(private prisma: PrismaService) {}

  async create(userInput: CreateUserInput): Promise<Users> {
    const user = await this.prisma.user.create({
      data: userInput,
    });

    return user;
  }

  async findByEmail(email: string): Promise<Users | null> {
    return await this.prisma.user.findFirst({ where: { email: email } });
  }

  async findById(id: string): Promise<Users> {
    return await this.prisma.user.findUnique({ where: { id: id } });
  }

  async remove({ id }: { id: string }): Promise<void> {
    await this.prisma.user.delete({ where: { id: id } });
  }

  async findAll(): Promise<Users[]> {
    return await this.prisma.user.findMany();
  }
  async update(id: string, user: UpdateUserInput): Promise<Users> {
    return await this.prisma.user.update({
      where: { id: id },
      data: {
        email: user.email,
        nationality: user.nationality,
        password: user.password,
        avatar: user.avatar,
      },
    });
  }
}
