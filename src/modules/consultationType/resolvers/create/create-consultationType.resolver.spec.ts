import { Test, TestingModule } from '@nestjs/testing';
import { CreateConstationTypeResolver } from './create-consultationType.resolver';

describe('CreateConstationTypeResolver', () => {
  let resolver: CreateConstationTypeResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CreateConstationTypeResolver],
    }).compile();

    resolver = module.get<CreateConstationTypeResolver>(
      CreateConstationTypeResolver,
    );
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
