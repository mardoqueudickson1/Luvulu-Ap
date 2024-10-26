import { Test, TestingModule } from '@nestjs/testing';
import { CreateQrCodeService } from './create-qr-code.service';

describe('CreateQrCodeService', () => {
  let service: CreateQrCodeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CreateQrCodeService],
    }).compile();

    service = module.get<CreateQrCodeService>(CreateQrCodeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
