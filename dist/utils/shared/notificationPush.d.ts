export type NotificationMessageType = {
    to: string;
    sound?: string;
    title: string;
    body: string;
};
export declare function sendPushNotification(data: NotificationMessageType): void;
