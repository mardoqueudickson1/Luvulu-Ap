import { CreateClinicService } from '../../usecases/create/create-clinic.service';
import { Test, TestingModule } from '@nestjs/testing';
import { CreateClinicResolver } from './create-clinic.resolver';

describe('CreateClinicResolver', () => {
  let resolver: CreateClinicResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CreateClinicResolver, CreateClinicService],
    }).compile();

    resolver = module.get<CreateClinicResolver>(CreateClinicResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
