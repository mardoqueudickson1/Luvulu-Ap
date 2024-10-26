import { Test, TestingModule } from '@nestjs/testing';
import { RemoveConsultationTypeService } from './remove-consultationType.service';

describe('RemoveConsultationTypeService', () => {
  let service: RemoveConsultationTypeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RemoveConsultationTypeService],
    }).compile();

    service = module.get<RemoveConsultationTypeService>(
      RemoveConsultationTypeService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
