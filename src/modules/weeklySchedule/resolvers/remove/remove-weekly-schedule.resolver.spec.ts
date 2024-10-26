import { Test, TestingModule } from '@nestjs/testing';
import { RemoveWorkCalendarResolver } from './remove-work-calendar.resolver';

describe('RemoveWorkCalendarResolver', () => {
  let resolver: RemoveWorkCalendarResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RemoveWorkCalendarResolver],
    }).compile();

    resolver = module.get<RemoveWorkCalendarResolver>(
      RemoveWorkCalendarResolver,
    );
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
