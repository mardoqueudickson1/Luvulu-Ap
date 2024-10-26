import { Injectable } from '@nestjs/common';
import { IConfirmationCodeRepository } from '../../repository/interfaces/IConfirmationCode';

@Injectable()
export class PasswordConfirmationService {
  constructor(private readonly confirmationRepo: IConfirmationCodeRepository) {}

  async generateConfirmationCode(user: string): Promise<string> {
    const code = generateUniqueCode();

    const expirationTime = new Date();
    expirationTime.setMinutes(expirationTime.getMinutes() + 10);

    // await this.confirmationRepo.create({
    //   data: {
    //     userId: user.id,
    //     code,
    //     expiresAt: expirationTime,
    //   },
    // });

    return code;
  }

  async verifyConfirmationCode(userId: string, code: string): Promise<boolean> {
    await this.confirmationRepo.verifyConfirmationCode(userId, code);
    return true;
  }
}

async function generateUniqueCode(): Promise<string> {
  const codeLength = 6;
  let code = '';

  for (let i = 0; i < codeLength; i++) {
    const digit = Math.floor(Math.random() * 10);
    code += digit.toString();
  }

  return code;
}
