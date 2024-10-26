import { Queue } from 'bull';
export declare class UploadavatarQueueService {
    private sendQueue;
    constructor(sendQueue: Queue);
    SendAvatarQueue(file: any): Promise<void>;
}
