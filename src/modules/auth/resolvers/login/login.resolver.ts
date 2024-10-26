import { LoginInput } from '../../dtos/login.input';
import { LoginOutput } from '../../dtos/login.output';
import { LoginService } from '../../usecases/login/login.service';
import { Resolver, Mutation, Args } from '@nestjs/graphql';

@Resolver()
export class LoginResolver {
  constructor(private readonly loginService: LoginService) {}

  // @UseGuards(GqlAuthGuard)
  @Mutation(() => LoginOutput)
  async Login(
    @Args('data')
    data: LoginInput,
  ): Promise<LoginOutput> {
    const response = await this.loginService.validateUser(data);
    return {
      user: response.user,
      token: response.token,
      expiresIn: response.expiresIn,
    };
  }
}
