import { Job } from 'bull';
export declare class UploadAvatarConsumer {
    supabaseClient: any;
    userRepo: any;
    SendavatarJob(job: Job<unknown>): Promise<{}>;
}
