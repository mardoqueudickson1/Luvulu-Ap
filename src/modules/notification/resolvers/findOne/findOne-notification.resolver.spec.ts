import { Test, TestingModule } from '@nestjs/testing';
import { FindOneNotificationService } from '../../usecases/findOne/findOne-notification.service';
import { FindOneNotificationResolver } from './findOne-notification.resolver';

describe('FindOneNotificationResolver', () => {
  let resolver: FindOneNotificationResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FindOneNotificationResolver, FindOneNotificationService],
    }).compile();

    resolver = module.get<FindOneNotificationResolver>(
      FindOneNotificationResolver,
    );
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
