import { Test, TestingModule } from '@nestjs/testing';
import { CreateWeeklyScheduleService } from './create-weekly-schedule.service';

describe('CreateWeeklyScheduleService', () => {
  let service: CreateWeeklyScheduleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CreateWeeklyScheduleService],
    }).compile();

    service = module.get<CreateWeeklyScheduleService>(
      CreateWeeklyScheduleService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
