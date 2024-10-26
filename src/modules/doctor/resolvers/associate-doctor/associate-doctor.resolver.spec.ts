import { Test, TestingModule } from '@nestjs/testing';
import { AssociateDoctorResolver } from './associate-doctor.resolver';

describe('AssociateDoctorResolver', () => {
  let resolver: AssociateDoctorResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AssociateDoctorResolver],
    }).compile();

    resolver = module.get<AssociateDoctorResolver>(AssociateDoctorResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
