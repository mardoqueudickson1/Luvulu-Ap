import { Test, TestingModule } from '@nestjs/testing';
import { FindOneRatingResolver } from './find-one-rating.resolver';

describe('FindOneRatingResolver', () => {
  let resolver: FindOneRatingResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FindOneRatingResolver],
    }).compile();

    resolver = module.get<FindOneRatingResolver>(FindOneRatingResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
