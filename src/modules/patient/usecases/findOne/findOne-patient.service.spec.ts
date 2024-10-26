import { Test, TestingModule } from '@nestjs/testing';
import { FindOnePatientService } from './findOne-patitient.service';

describe('PatientService', () => {
  let service: FindOnePatientService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FindOnePatientService],
    }).compile();

    service = module.get<FindOnePatientService>(FindOnePatientService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
