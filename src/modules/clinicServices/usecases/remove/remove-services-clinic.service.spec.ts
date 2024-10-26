import { Test, TestingModule } from '@nestjs/testing';
import { RemoveServicesClinicService } from './remove-services-clinic.service';

describe('RemoveServicesClinicService', () => {
  let service: RemoveServicesClinicService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RemoveServicesClinicService],
    }).compile();

    service = module.get<RemoveServicesClinicService>(
      RemoveServicesClinicService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
