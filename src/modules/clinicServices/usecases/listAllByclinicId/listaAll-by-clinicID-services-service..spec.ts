import { Test, TestingModule } from '@nestjs/testing';
import { ListAllServicesBydClinicIdClinicService } from './listaAll-services-ByclinicId.service';

describe('ListAllServicesBydClinicIdClinicService', () => {
  let service: ListAllServicesBydClinicIdClinicService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ListAllServicesBydClinicIdClinicService],
    }).compile();

    service = module.get<ListAllServicesBydClinicIdClinicService>(
      ListAllServicesBydClinicIdClinicService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
