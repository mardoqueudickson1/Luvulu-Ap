import { Test, TestingModule } from '@nestjs/testing';
import { UpdateConsultationTypeService } from './update-consultationType.service';

describe('UpdateConsultationTypeService', () => {
  let service: UpdateConsultationTypeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UpdateConsultationTypeService],
    }).compile();

    service = module.get<UpdateConsultationTypeService>(
      UpdateConsultationTypeService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
