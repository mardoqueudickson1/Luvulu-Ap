import { Test, TestingModule } from '@nestjs/testing';
import { ListAllClinicService } from './listaAll-clinic.service';

describe('ListAllClinicService', () => {
  let service: ListAllClinicService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ListAllClinicService],
    }).compile();

    service = module.get<ListAllClinicService>(ListAllClinicService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
