import { Test, TestingModule } from '@nestjs/testing';
import { FindOneClinicService } from './findOne-clinic.service';

describe('FindOneClinicService', () => {
  let service: FindOneClinicService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FindOneClinicService],
    }).compile();

    service = module.get<FindOneClinicService>(FindOneClinicService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
