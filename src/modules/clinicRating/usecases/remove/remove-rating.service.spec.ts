import { Test, TestingModule } from '@nestjs/testing';
import { RemoveRatingService } from './remove-rating.service';

describe('RemoveRatingService', () => {
  let service: RemoveRatingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RemoveRatingService],
    }).compile();

    service = module.get<RemoveRatingService>(RemoveRatingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
