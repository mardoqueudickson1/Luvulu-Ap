import { Test, TestingModule } from '@nestjs/testing';
import { RemoveRatingResolver } from './remove-rating.resolver';

describe('RemoveRatingResolver', () => {
  let resolver: RemoveRatingResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RemoveRatingResolver],
    }).compile();

    resolver = module.get<RemoveRatingResolver>(RemoveRatingResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
