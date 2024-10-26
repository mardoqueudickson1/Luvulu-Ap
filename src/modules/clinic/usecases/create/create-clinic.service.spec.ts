import { Test, TestingModule } from '@nestjs/testing';
import { CreateClinicService } from './create-clinic.service';

describe('CreateClinicService', () => {
  let service: CreateClinicService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CreateClinicService],
    }).compile();

    service = module.get<CreateClinicService>(CreateClinicService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
