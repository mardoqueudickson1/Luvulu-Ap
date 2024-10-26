import { Test, TestingModule } from '@nestjs/testing';
import { RemoveClinicService } from '../../usecases/remove/remove-patitient.service';
import { RemoveClinicResolver } from './remove-clinic.resolver';

describe('RemoveClinicResolver', () => {
  let resolver: RemoveClinicResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RemoveClinicResolver, RemoveClinicService],
    }).compile();

    resolver = module.get<RemoveClinicResolver>(RemoveClinicResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
