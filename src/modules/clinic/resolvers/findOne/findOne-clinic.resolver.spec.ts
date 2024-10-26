import { Test, TestingModule } from '@nestjs/testing';
import { FindOneClinicResolver } from './findOne-clinic.resolver';
import { FindOneClinicService } from '../../usecases/findOne/findOne-clinic.service';

describe('FindOneClinicResolver', () => {
  let resolver: FindOneClinicResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FindOneClinicResolver, FindOneClinicService],
    }).compile();

    resolver = module.get<FindOneClinicResolver>(FindOneClinicResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
