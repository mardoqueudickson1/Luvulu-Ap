import { Test, TestingModule } from '@nestjs/testing';
import { CreateFavoriteService } from './create-favorite.service';

describe('CreateFavoriteService', () => {
  let service: CreateFavoriteService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CreateFavoriteService],
    }).compile();

    service = module.get<CreateFavoriteService>(CreateFavoriteService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
