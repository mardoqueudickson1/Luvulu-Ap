import { Test, TestingModule } from '@nestjs/testing';
import { FindOneRatedService } from './find-one-rated.service';

describe('FindOneRatedService', () => {
  let service: FindOneRatedService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FindOneRatedService],
    }).compile();

    service = module.get<FindOneRatedService>(FindOneRatedService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
