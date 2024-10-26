import { UseGuards } from '@nestjs/common';
import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { GqlAuthGuard } from 'src/modules/auth/guards/jwt-auth.guard';
import { ClinicRatings } from '../../entities/ClinicRating.entity';
import { UpdateClinicRatingService } from '../../usecases/update/update-rating.service';
import { updateClinicRating } from '../../dtos/update-ClinicRating';

@Resolver('consultation-type')
export class UpdateClinicRatingResolver {
  constructor(private readonly repo: UpdateClinicRatingService) {}

  @UseGuards(GqlAuthGuard)
  @Mutation(() => ClinicRatings)
  async UpdateClinicRating(@Args('data') data: updateClinicRating) {
    return await this.repo.update(data.id, data);
  }
}
