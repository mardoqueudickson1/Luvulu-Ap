import { Test, TestingModule } from '@nestjs/testing';
import { FindAllClinicRatingResolver } from './find-all-rating.resolver';

describe('FindAllClinicRatingResolver', () => {
  let resolver: FindAllClinicRatingResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FindAllClinicRatingResolver],
    }).compile();

    resolver = module.get<FindAllClinicRatingResolver>(
      FindAllClinicRatingResolver,
    );
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
