import { Test, TestingModule } from '@nestjs/testing';
import { RemoveServicesClinicService } from '../../usecases/remove/remove-services-clinic.service';
import { RemoveServicesClinicResolver } from './remove-services-clinic.resolver';

describe('RemoveServicesClinicResolver', () => {
  let resolver: RemoveServicesClinicResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RemoveServicesClinicResolver, RemoveServicesClinicService],
    }).compile();

    resolver = module.get<RemoveServicesClinicResolver>(
      RemoveServicesClinicResolver,
    );
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
