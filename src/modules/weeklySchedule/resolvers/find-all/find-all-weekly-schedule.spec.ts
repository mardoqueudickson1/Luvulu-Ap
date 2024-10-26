import { Test, TestingModule } from '@nestjs/testing';
import { FindAllWeeklyScheduleResolver } from './find-all-weekly-schedule.resolver';

describe('FindAllWeeklyScheduleResolver', () => {
  let resolver: FindAllWeeklyScheduleResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FindAllWeeklyScheduleResolver],
    }).compile();

    resolver = module.get<FindAllWeeklyScheduleResolver>(
      FindAllWeeklyScheduleResolver,
    );
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
