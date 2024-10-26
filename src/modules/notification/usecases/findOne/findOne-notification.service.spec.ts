import { Test, TestingModule } from '@nestjs/testing';
import { FindOneNotificationService } from './findOne-notification.service';

describe('FindOneNotificationService', () => {
  let service: FindOneNotificationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FindOneNotificationService],
    }).compile();

    service = module.get<FindOneNotificationService>(
      FindOneNotificationService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
