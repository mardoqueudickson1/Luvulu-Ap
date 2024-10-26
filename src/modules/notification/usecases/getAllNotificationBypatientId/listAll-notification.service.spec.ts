import { Test, TestingModule } from '@nestjs/testing';
import { ListAllNotificationService } from './listaAll-notification.service';

describe('ListAllNotificationService', () => {
  let service: ListAllNotificationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ListAllNotificationService],
    }).compile();

    service = module.get<ListAllNotificationService>(
      ListAllNotificationService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
