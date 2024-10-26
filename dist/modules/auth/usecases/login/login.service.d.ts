import { LoginInput } from '../../../auth/dtos/login.input';
import { LoginOutput } from '../../../auth/dtos/login.output';
import { IUserRepository } from '../../../user/repository/interface/IUserRepository';
import { JwtService } from '@nestjs/jwt';
import { IFCMRepository } from 'src/modules/push-notification/repository/interface/IFCMRepository';
export declare class LoginService {
    private jwtService;
    private readonly userRepo;
    private fcmRepo;
    constructor(jwtService: JwtService, userRepo: IUserRepository, fcmRepo: IFCMRepository);
    validateUser(data: LoginInput): Promise<LoginOutput>;
    private jwtToken;
}
