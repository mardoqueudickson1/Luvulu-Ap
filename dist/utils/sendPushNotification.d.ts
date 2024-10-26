export type dataPushType = {
    title: string;
    message: string;
    token: string;
};
export declare function SendPushNotification(data: dataPushType): Promise<void>;
