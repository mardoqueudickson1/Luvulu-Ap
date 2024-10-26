import { Test, TestingModule } from '@nestjs/testing';
import { AssociateDoctorService } from './associate-doctor.service';

describe('AssociateDoctorService', () => {
  let service: AssociateDoctorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AssociateDoctorService],
    }).compile();

    service = module.get<AssociateDoctorService>(AssociateDoctorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
