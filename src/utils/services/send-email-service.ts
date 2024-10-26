import * as sendGridMail from '@sendgrid/mail';
import { messages } from '../shared/errorsMessages';
import { BadRequestException } from '@nestjs/common';

interface IRequest {
  to: string;
  from: string;
  templateId: string;
  dynamic_template_data: any;
  subject: string;
}

export async function sendEmail({
  to,
  from,
  templateId,
  dynamic_template_data,
  subject,
}: IRequest): Promise<void> {
  sendGridMail.setApiKey(process.env.SENDGRID_API_KEY);

  const msg = {
    to,
    from,
    templateId,
    dynamic_template_data,
    subject,
  };

  try {
    await sendGridMail.send(msg);
  } catch (error) {
    throw new BadRequestException(messages.errorEmail);
  }
}
