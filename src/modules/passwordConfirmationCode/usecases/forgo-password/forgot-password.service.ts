// import { Injectable, NotFoundException } from '@nestjs/common';
// import { PrismaService } from './prisma.service';
// import { SendMailService } from './sendMail.service';
// import { User } from './prisma-client';
// import { generateRandomCode, hashPassword } from './utils';

// @Injectable()
// export class PasswordConfirmationService {
//   constructor(
//     private readonly prisma: PrismaService,
//     private readonly sendMailService: SendMailService,
//   ) {}

//   async requestPasswordConfirmation(email: string): Promise<boolean> {
//     const user = await this.prisma.user.findUnique({ where: { email } });

//     if (!user) {
//       return true;
//     }

//     // Gere e salve o código de confirmação
//     const confirmationCode = await this.generateConfirmationCode(user);

//     // Envie o código por e-mail
//     await this.sendConfirmationCodeByEmail(user.email, confirmationCode);

//     return true;
//   }

//   async confirmCodeAndResetPassword(
//     email: string,
//     code: string,
//     newPassword: string,
//   ): Promise<boolean> {
//     const user = await this.prisma.user.findUnique({ where: { email } });

//     if (!user) {
//       throw new NotFoundException('Usuário não encontrado');
//     }

//     if (code !== user.confirmationCode) {
//       throw new NotFoundException('Código de confirmação inválido');
//     }

//     const hashedPassword = await hashPassword(newPassword);

//     await this.prisma.user.update({
//       where: { id: user.id },
//       data: { password: hashedPassword, confirmationCode: null },
//     });

//     return true;
//   }

//   private async generateConfirmationCode(user: User): Promise<string> {
//     const confirmationCode = generateRandomCode();

//     await this.prisma.user.update({
//       where: { id: user.id },
//       data: { confirmationCode },
//     });

//     return confirmationCode;
//   }

//   private async sendConfirmationCodeByEmail(
//     email: string,
//     code: string,
//   ): Promise<void> {
//     const subject = 'Código de Confirmação para Redefinição de Senha';
//     const text = `Seu código de confirmação para redefinição de senha é: ${code}`;

//     await this.sendMailService.execute({
//       to: email,
//       subject,
//       text,
//       html: text,
//     });
//   }
// }

// function generateRandomCode(length: number = 6): string {
//   const characters = '0123456789';
//   let code = '';

//   for (let i = 0; i < length; i++) {
//     const randomIndex = Math.floor(Math.random() * characters.length);
//     code += characters[randomIndex];
//   }

//   return code;
// }

// export { generateRandomCode };
