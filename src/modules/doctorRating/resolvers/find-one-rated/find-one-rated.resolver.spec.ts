import { Test, TestingModule } from '@nestjs/testing';
import { FindOneRatedResolver } from './find-one-rated.resolver';

describe('FindOneRatedResolver', () => {
  let resolver: FindOneRatedResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FindOneRatedResolver],
    }).compile();

    resolver = module.get<FindOneRatedResolver>(FindOneRatedResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
