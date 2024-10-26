import { Test, TestingModule } from '@nestjs/testing';
import { RemoveFavoriteService } from './remove-favorite.service';

describe('RemoveFavoriteService', () => {
  let service: RemoveFavoriteService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RemoveFavoriteService],
    }).compile();

    service = module.get<RemoveFavoriteService>(RemoveFavoriteService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
