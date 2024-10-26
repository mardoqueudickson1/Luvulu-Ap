import { Test, TestingModule } from '@nestjs/testing';
import { FindOneWeeklyScheduleService } from '../../usecases/find-one/find-one-weekly-schedule.service';

describe('FindOneWeeklyScheduleService', () => {
  let resolver: FindOneWeeklyScheduleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FindOneWeeklyScheduleService],
    }).compile();

    resolver = module.get<FindOneWeeklyScheduleService>(
      FindOneWeeklyScheduleService,
    );
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
