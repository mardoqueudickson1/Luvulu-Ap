import { Test, TestingModule } from '@nestjs/testing';
import { RemoveNotificationResolver } from './remove-notification.resolver';
import { RemoveNotificationService } from '../../usecases/remove/remove-notification.service';

describe('RemoveNotificationResolver', () => {
  let resolver: RemoveNotificationResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RemoveNotificationResolver, RemoveNotificationService],
    }).compile();

    resolver = module.get<RemoveNotificationResolver>(
      RemoveNotificationResolver,
    );
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
