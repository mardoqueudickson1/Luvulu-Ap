import { Test, TestingModule } from '@nestjs/testing';
import { RemoveWeeklyScheduleService } from './remove-weekly-schedule.service';

describe('RemoveWeeklyScheduleService', () => {
  let service: RemoveWeeklyScheduleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RemoveWeeklyScheduleService],
    }).compile();

    service = module.get<RemoveWeeklyScheduleService>(
      RemoveWeeklyScheduleService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
