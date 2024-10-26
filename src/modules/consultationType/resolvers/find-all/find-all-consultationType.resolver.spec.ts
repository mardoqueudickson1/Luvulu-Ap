import { Test, TestingModule } from '@nestjs/testing';
import { FindAllResolver } from './find-all-consultationType.resolver';

describe('FindAllResolver', () => {
  let resolver: FindAllResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FindAllResolver],
    }).compile();

    resolver = module.get<FindAllResolver>(FindAllResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
