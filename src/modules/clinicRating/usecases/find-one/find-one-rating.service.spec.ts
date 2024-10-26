import { Test, TestingModule } from '@nestjs/testing';
import { FindORatingService } from './find-onde-rating.service';

describe('FindORatingService', () => {
  let service: FindORatingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FindORatingService],
    }).compile();

    service = module.get<FindORatingService>(FindORatingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
