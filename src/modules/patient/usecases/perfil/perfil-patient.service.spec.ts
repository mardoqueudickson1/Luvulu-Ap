import { Test, TestingModule } from '@nestjs/testing';
import { ProfilePatientService } from './perfil-patitient.service';

describe('ProfilePatientService', () => {
  let service: ProfilePatientService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProfilePatientService],
    }).compile();

    service = module.get<ProfilePatientService>(ProfilePatientService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
