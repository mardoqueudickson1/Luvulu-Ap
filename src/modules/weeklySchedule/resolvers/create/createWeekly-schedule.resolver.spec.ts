import { Test, TestingModule } from '@nestjs/testing';
import { CreateWeeklyScheduleResolver } from './createWeekly-schedule.resolver';

describe('CreateWeeklyScheduleResolver', () => {
  let resolver: CreateWeeklyScheduleResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CreateWeeklyScheduleResolver],
    }).compile();

    resolver = module.get<CreateWeeklyScheduleResolver>(
      CreateWeeklyScheduleResolver,
    );
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
