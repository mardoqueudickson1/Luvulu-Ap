import { Test, TestingModule } from '@nestjs/testing';
import { CreateRatingResolver } from './create-rating.resolver';

describe('CreateRatingResolver', () => {
  let resolver: CreateRatingResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CreateRatingResolver],
    }).compile();

    resolver = module.get<CreateRatingResolver>(CreateRatingResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
