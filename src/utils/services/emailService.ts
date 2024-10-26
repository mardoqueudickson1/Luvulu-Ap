import { Injectable, InternalServerErrorException } from '@nestjs/common';
import * as sendGridMail from '@sendgrid/mail';
import { messages } from '../shared/errorsMessages';

type IEmailItems = {
  to: string;
  subject: string;
  text?: string;
  html: string;
};

@Injectable()
export class SendMailService {
  async execute({ to, subject, html, text }: IEmailItems): Promise<any> {
    try {
      sendGridMail.setApiKey(process.env.SENDGRID_API_KEY ?? '');

      await sendGridMail.send({
        to,
        from: `Luvulu <${process.env.EMAIL_FROM}>`,
        subject,
        text,
        html,
      });
      return true;
    } catch (error: any) {
      throw new InternalServerErrorException(messages.errorEmail);
    }
  }
}
