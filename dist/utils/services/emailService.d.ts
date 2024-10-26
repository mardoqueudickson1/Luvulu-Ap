type IEmailItems = {
    to: string;
    subject: string;
    text?: string;
    html: string;
};
export declare class SendMailService {
    execute({ to, subject, html, text }: IEmailItems): Promise<any>;
}
export {};
