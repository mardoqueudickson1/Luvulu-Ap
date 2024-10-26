import { Test, TestingModule } from '@nestjs/testing';
import { RemoveClinicRatingResolver } from './remove-rating.resolver';

describe('RemoveClinicRatingResolver', () => {
  let resolver: RemoveClinicRatingResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RemoveClinicRatingResolver],
    }).compile();

    resolver = module.get<RemoveClinicRatingResolver>(
      RemoveClinicRatingResolver,
    );
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
