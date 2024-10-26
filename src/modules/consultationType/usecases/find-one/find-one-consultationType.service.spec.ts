import { Test, TestingModule } from '@nestjs/testing';
import { FindOndeService } from './find-onde-consultationType.service';

describe('FindOndeService', () => {
  let service: FindOndeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FindOndeService],
    }).compile();

    service = module.get<FindOndeService>(FindOndeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
