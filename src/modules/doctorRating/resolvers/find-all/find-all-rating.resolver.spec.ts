import { Test, TestingModule } from '@nestjs/testing';
import { FindAllRatingResolver } from './find-all-rating.resolver';

describe('FindAllRatingResolver', () => {
  let resolver: FindAllRatingResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FindAllRatingResolver],
    }).compile();

    resolver = module.get<FindAllRatingResolver>(FindAllRatingResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
