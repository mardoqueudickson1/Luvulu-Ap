import { Test, TestingModule } from '@nestjs/testing';
import { CreateServicesClinicService } from '../../usecases/create/create-services-clinic.service';
import { CreateServicesClinicResolver } from './create-services-clinic.resolver';

describe('CreateServicesClinicResolver', () => {
  let resolver: CreateServicesClinicResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CreateServicesClinicResolver, CreateServicesClinicService],
    }).compile();

    resolver = module.get<CreateServicesClinicResolver>(
      CreateServicesClinicResolver,
    );
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
