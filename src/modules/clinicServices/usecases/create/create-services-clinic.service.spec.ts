import { Test, TestingModule } from '@nestjs/testing';
import { CreateServicesClinicService } from './create-services-clinic.service';

describe('CreateServicesClinicService', () => {
  let service: CreateServicesClinicService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CreateServicesClinicService],
    }).compile();

    service = module.get<CreateServicesClinicService>(
      CreateServicesClinicService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
