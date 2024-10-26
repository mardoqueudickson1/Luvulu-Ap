import { Test, TestingModule } from '@nestjs/testing';
import { LoginService } from './login.service';

import { JwtService } from '@nestjs/jwt';
import { IUserRepository } from '../../../user/repository/interface/IUserRepository';
import { PrismaUserRepositoy } from '../../../user/repository/implementations/prismaUserRepository';
import { PrismaModule } from '../../../prisma/prisma.module';

describe('LoginService', () => {
  let service: LoginService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        LoginService,
        JwtService,
        {
          provide: IUserRepository,
          useClass: PrismaUserRepositoy,
        },
      ],
      imports: [PrismaModule],
    }).compile();

    service = module.get<LoginService>(LoginService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
