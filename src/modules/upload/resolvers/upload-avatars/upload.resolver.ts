import { Resolver, Mutation, Args } from '@nestjs/graphql';
import * as GraphQLUpload from 'graphql-upload/GraphQLUpload.js';
import * as uploadType from 'graphql-upload/Upload.js';
import { SuperBaseService } from '../../usecases/upload-avatar/upload-user-avatar.service';
import { UseGuards } from '@nestjs/common';
import { CurrentUser } from 'src/modules/auth/decorator/current-user.decorator';
import { GqlAuthGuard } from 'src/modules/auth/guards/jwt-auth.guard';

@Resolver()
export class UploadFileResolver {
  constructor(private readonly repo: SuperBaseService) {}

  @UseGuards(GqlAuthGuard)
  @Mutation(() => Boolean, { name: 'uploadImage' })
  async uploadImage(
    @Args({ name: 'image', type: () => GraphQLUpload })
    image: uploadType,
    @CurrentUser()
    user: any,
  ): Promise<boolean> {
    console.log(image);
    await this.repo.saveFile(image, user.id);

    return true;
  }
}
