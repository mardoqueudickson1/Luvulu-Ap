import { Test, TestingModule } from '@nestjs/testing';
import { ListAllPatientService } from './listaAll-patitient.service';

describe('ListAllPatientService', () => {
  let service: ListAllPatientService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ListAllPatientService],
    }).compile();

    service = module.get<ListAllPatientService>(ListAllPatientService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
