import { Test, TestingModule } from '@nestjs/testing';
import { CreateRatingService } from './create-rating.service';

describe('CreateRatingService', () => {
  let service: CreateRatingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CreateRatingService],
    }).compile();

    service = module.get<CreateRatingService>(CreateRatingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
