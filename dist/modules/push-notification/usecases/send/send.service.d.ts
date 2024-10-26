export declare class SendNotificationService {
    constructor();
    scheduleNotification(date: Date, patientToken: string, title: string, body: string): Promise<void>;
}
