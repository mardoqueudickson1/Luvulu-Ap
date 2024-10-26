import { Test, TestingModule } from '@nestjs/testing';
import { UpdateConsultationTypesResolver } from './update-consultationType.resolver';

describe('UpdateConsultationTypesResolver', () => {
  let resolver: UpdateConsultationTypesResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UpdateConsultationTypesResolver],
    }).compile();

    resolver = module.get<UpdateConsultationTypesResolver>(
      UpdateConsultationTypesResolver,
    );
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
