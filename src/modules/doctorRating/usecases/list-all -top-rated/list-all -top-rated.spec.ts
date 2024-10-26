import { Test, TestingModule } from '@nestjs/testing';
import { ListAllTopRatingService } from './list-all-top-rated.service';

describe('ListAllTopRatingService', () => {
  let service: ListAllTopRatingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ListAllTopRatingService],
    }).compile();

    service = module.get<ListAllTopRatingService>(ListAllTopRatingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
