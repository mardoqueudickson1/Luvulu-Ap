import { Test, TestingModule } from '@nestjs/testing';
import { UpdateClinicRatingService } from './update-rating.service';

describe('UpdateClinicRatingService', () => {
  let service: UpdateClinicRatingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UpdateClinicRatingService],
    }).compile();

    service = module.get<UpdateClinicRatingService>(UpdateClinicRatingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
