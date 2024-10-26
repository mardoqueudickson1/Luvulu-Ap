import { Test, TestingModule } from '@nestjs/testing';
import { ListAllRatingService } from './list-all-rating.service';

describe('ListAllRatingService', () => {
  let service: ListAllRatingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ListAllRatingService],
    }).compile();

    service = module.get<ListAllRatingService>(ListAllRatingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
