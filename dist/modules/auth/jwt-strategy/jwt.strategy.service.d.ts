import { Strategy } from 'passport-jwt';
import { IUserRepository } from '../../user/repository/interface/IUserRepository';
import { Users } from 'src/modules/user/entities/user';
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    private userRepo;
    constructor(userRepo: IUserRepository);
    validate(payload: {
        sub: Users['userId'];
        name: string;
    }): Promise<Users>;
}
export {};
