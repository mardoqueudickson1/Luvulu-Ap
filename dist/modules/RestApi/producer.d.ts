import { Queue } from 'bull';
export declare class AudioService {
    private audioQueue;
    constructor(audioQueue: Queue);
}
