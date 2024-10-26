import { Test, TestingModule } from '@nestjs/testing';
import { FindOneWeeklyScheduleService } from './find-one-weekly-schedule.service';

describe('FindOneWeeklyScheduleService', () => {
  let service: FindOneWeeklyScheduleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FindOneWeeklyScheduleService],
    }).compile();

    service = module.get<FindOneWeeklyScheduleService>(
      FindOneWeeklyScheduleService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
