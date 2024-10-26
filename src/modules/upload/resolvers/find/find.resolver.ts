// superbase.resolver.ts

import { Resolver, Args, Query } from '@nestjs/graphql';
import { FindFileService } from '../../usecases/find/find-user-avatar.service';

@Resolver()
export class FindResolverResolver {
  constructor(private readonly repo: FindFileService) {}

  @Query(() => String)
  async PhotoName(
    @Args({ name: 'name', type: () => String }) photo: string,
  ): Promise<string> {
    const uploadedFile = await this.repo.getPhotoUrl(photo);

    return uploadedFile;
  }
}
