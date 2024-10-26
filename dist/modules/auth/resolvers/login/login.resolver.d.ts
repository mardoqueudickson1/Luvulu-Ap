import { LoginInput } from '../../dtos/login.input';
import { LoginOutput } from '../../dtos/login.output';
import { LoginService } from '../../usecases/login/login.service';
export declare class LoginResolver {
    private readonly loginService;
    constructor(loginService: LoginService);
    Login(data: LoginInput): Promise<LoginOutput>;
}
