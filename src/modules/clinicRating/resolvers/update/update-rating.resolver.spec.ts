import { Test, TestingModule } from '@nestjs/testing';
import { UpdateClinicRatingResolver } from './update-rating.resolver';

describe('UpdateClinicRatingResolver', () => {
  let resolver: UpdateClinicRatingResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UpdateClinicRatingResolver],
    }).compile();

    resolver = module.get<UpdateClinicRatingResolver>(
      UpdateClinicRatingResolver,
    );
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
