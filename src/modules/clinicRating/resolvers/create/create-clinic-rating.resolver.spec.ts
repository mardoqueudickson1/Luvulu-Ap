import { Test, TestingModule } from '@nestjs/testing';
import { CreateClinicRatingResolver } from './create-clinic-rating.resolver';

describe('CreateClinicRatingResolver', () => {
  let resolver: CreateClinicRatingResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CreateClinicRatingResolver],
    }).compile();

    resolver = module.get<CreateClinicRatingResolver>(
      CreateClinicRatingResolver,
    );
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
