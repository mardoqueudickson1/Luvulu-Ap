import { Test, TestingModule } from '@nestjs/testing';
import { RemovePatientService } from './remove-patitient.service';

describe('RemovePatientService', () => {
  let service: RemovePatientService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RemovePatientService],
    }).compile();

    service = module.get<RemovePatientService>(RemovePatientService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
