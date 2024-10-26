import { BadRequestException } from '@nestjs/common';
import * as twilio from 'twilio';
import { messages } from '../shared/errorsMessages';

export async function sendSms(phones: string, message: string): Promise<void> {
  try {
    const twillioToken = process.env.TWILIO_AUTH_TOKEN;
    const twilioID = process.env.TWILIO_ACCOUNTS_ID;
    const twilioPhoneNumber = process.env.TWILIO_PHONE_NUMBER;
    const client: twilio.Twilio = twilio(twilioID, twillioToken);

    await client.messages.create({
      body: message,
      from: twilioPhoneNumber,
      to: phones,
    });
  } catch (error) {
    throw new BadRequestException(messages.errorSMS);
  }
}
