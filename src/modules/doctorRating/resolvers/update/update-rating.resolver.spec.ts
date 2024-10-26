import { Test, TestingModule } from '@nestjs/testing';
import { UpdateRatingResolver } from './update-rating.resolver';

describe('UpdateRatingResolver', () => {
  let resolver: UpdateRatingResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UpdateRatingResolver],
    }).compile();

    resolver = module.get<UpdateRatingResolver>(UpdateRatingResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
