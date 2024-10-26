import { Test, TestingModule } from '@nestjs/testing';
import { CreateResolver } from './create.resolver';

describe('CreateResolver', () => {
  let resolver: CreateResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CreateResolver],
    }).compile();

    resolver = module.get<CreateResolver>(CreateResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
