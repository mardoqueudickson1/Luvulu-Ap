import { Test, TestingModule } from '@nestjs/testing';
import { FindAllFavoriteResolver } from './find-all-favorite.resolver';

describe('FindAllFavoriteResolver', () => {
  let service: FindAllFavoriteResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FindAllFavoriteResolver],
    }).compile();

    service = module.get<FindAllFavoriteResolver>(FindAllFavoriteResolver);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
