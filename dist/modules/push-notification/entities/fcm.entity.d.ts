import { FCMToken } from '@prisma/client';
export declare class fcmTokens implements FCMToken {
    id: string;
    userId: string;
    token: string;
}
