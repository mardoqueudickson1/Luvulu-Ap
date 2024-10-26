import { Test, TestingModule } from '@nestjs/testing';
import { UpdateRatingService } from './update-rating.service';

describe('UpdateRatingService', () => {
  let service: UpdateRatingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UpdateRatingService],
    }).compile();

    service = module.get<UpdateRatingService>(UpdateRatingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
