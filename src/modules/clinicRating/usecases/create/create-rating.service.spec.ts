import { Test, TestingModule } from '@nestjs/testing';
import { CreateClinicRatingService } from './create-rating.service';

describe('CreateClinicRatingService', () => {
  let service: CreateClinicRatingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CreateClinicRatingService],
    }).compile();

    service = module.get<CreateClinicRatingService>(CreateRatingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
