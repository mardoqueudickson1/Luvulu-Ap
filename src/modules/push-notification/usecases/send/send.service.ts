import * as admin from 'firebase-admin';
import { Injectable } from '@nestjs/common';
import * as schedule from 'node-schedule';
import { firebaseConfig } from '../../firebase.config';

@Injectable()
export class SendNotificationService {
  constructor() {
    admin.initializeApp({
      credential: admin.credential.cert(firebaseConfig),
    });
  }

  async scheduleNotification(
    date: Date,
    patientToken: string,
    title: string,
    body: string,
  ): Promise<void> {
    const notificationDate = new Date(date.getTime() - 24 * 60 * 60 * 1000);

    schedule.scheduleJob(notificationDate, async () => {
      try {
        const message = {
          data: {
            title,
            body,
          },
          token: patientToken,
        };

        const response = await admin.messaging().send(message);
        console.log('Successfully sent message:', response);
      } catch (error) {
        console.error('Error sending message:', error);
      }
    });
  }
}
