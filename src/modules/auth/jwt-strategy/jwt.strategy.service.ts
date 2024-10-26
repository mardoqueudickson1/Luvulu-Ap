import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { Patients } from '../../patient/entities/patient.entity';
import { IUserRepository } from '../../user/repository/interface/IUserRepository';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private userRepo: IUserRepository) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET,
    });
  }

  async validate(payload: { sub: Patients['id']; name: string }) {
    const user = await this.userRepo.findById(payload.sub);

    if (!user) {
      throw new UnauthorizedException('Ups, Você precisa estar logado.');
    }

    return user;
  }
}
