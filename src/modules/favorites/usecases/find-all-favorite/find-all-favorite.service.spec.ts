import { Test, TestingModule } from '@nestjs/testing';
import { FindAllFavoriteService } from './find-all-favorite.service';

describe('FindAllFavoriteService', () => {
  let service: FindAllFavoriteService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FindAllFavoriteService],
    }).compile();

    service = module.get<FindAllFavoriteService>(FindAllFavoriteService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
