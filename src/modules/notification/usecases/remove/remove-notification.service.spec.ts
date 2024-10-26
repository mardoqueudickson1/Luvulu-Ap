import { Test, TestingModule } from '@nestjs/testing';
import { RemoveNotificationService } from './remove-notification.service';

describe('RemoveNotificationService', () => {
  let service: RemoveNotificationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RemoveNotificationService],
    }).compile();

    service = module.get<RemoveNotificationService>(RemoveNotificationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
