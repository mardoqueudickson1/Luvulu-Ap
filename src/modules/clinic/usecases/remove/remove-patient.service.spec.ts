import { Test, TestingModule } from '@nestjs/testing';
import { RemoveClinicService } from './remove-patitient.service';

describe('RemoveClinicService', () => {
  let service: RemoveClinicService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RemoveClinicService],
    }).compile();

    service = module.get<RemoveClinicService>(RemoveClinicService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
