import { Users } from '../../user/entities/user';
export declare class LoginOutput {
    token: string;
    expiresIn: number;
    user: Users;
}
