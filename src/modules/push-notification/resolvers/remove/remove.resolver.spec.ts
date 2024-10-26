import { Test, TestingModule } from '@nestjs/testing';
import { RemoveResolver } from './remove.resolver';

describe('RemoveResolver', () => {
  let resolver: RemoveResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RemoveResolver],
    }).compile();

    resolver = module.get<RemoveResolver>(RemoveResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
