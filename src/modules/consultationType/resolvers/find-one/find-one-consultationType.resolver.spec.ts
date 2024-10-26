import { Test, TestingModule } from '@nestjs/testing';
import { FindOneResolver } from './find-one-consultationType.resolver';

describe('FindOneResolver', () => {
  let resolver: FindOneResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FindOneResolver],
    }).compile();

    resolver = module.get<FindOneResolver>(FindOneResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
