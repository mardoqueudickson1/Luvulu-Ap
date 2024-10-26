import { Test, TestingModule } from '@nestjs/testing';
import { UpdateWorkCalenarResolver } from './update-work-calender.resolver';

describe('UpdateWorkCalenarResolver', () => {
  let resolver: UpdateWorkCalenarResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UpdateWorkCalenarResolver],
    }).compile();

    resolver = module.get<UpdateWorkCalenarResolver>(UpdateWorkCalenarResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
