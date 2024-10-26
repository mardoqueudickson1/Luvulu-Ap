import { Test, TestingModule } from '@nestjs/testing';
import { ListAllTopClinicRatingService } from './list-all-top-rated.service';

describe('ListAllTopClinicRatingService', () => {
  let service: ListAllTopClinicRatingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ListAllTopClinicRatingService],
    }).compile();

    service = module.get<ListAllTopClinicRatingService>(
      ListAllTopClinicRatingService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
