import { Test, TestingModule } from '@nestjs/testing';
import { FindAllWeeklyScheduleService } from './find-all-weekly-schedule.service';

describe('FindAllWeeklyScheduleService', () => {
  let service: FindAllWeeklyScheduleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FindAllWeeklyScheduleService],
    }).compile();

    service = module.get<FindAllWeeklyScheduleService>(
      FindAllWeeklyScheduleService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
