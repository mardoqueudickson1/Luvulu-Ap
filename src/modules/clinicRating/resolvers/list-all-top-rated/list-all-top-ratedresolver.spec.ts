import { Test, TestingModule } from '@nestjs/testing';
import { FindAllTopClinicRatedResolver } from './find-all-rating.resolver';

describe('FindAllTopClinicRatedResolver', () => {
  let resolver: FindAllTopClinicRatedResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FindAllTopClinicRatedResolver],
    }).compile();

    resolver = module.get<FindAllTopClinicRatedResolver>(
      FindAllTopClinicRatedResolver,
    );
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
