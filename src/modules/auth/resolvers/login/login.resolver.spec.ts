import { LoginService } from '../../../auth/usecases/login/login.service';
import { Test, TestingModule } from '@nestjs/testing';
import { LoginResolver } from './login.resolver';

describe('LoginResolver', () => {
  let resolver: LoginResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LoginResolver, LoginService],
    }).compile();

    resolver = module.get<LoginResolver>(LoginResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
