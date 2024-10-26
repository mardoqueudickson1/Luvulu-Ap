import { Test, TestingModule } from '@nestjs/testing';
import { FindOneClinicRatingResolver } from './find-one-rating.resolver';

describe('FindOneClinicRatingResolver', () => {
  let resolver: FindOneClinicRatingResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FindOneClinicRatingResolver],
    }).compile();

    resolver = module.get<FindOneClinicRatingResolver>(
      FindOneClinicRatingResolver,
    );
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
