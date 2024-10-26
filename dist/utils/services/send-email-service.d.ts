interface IRequest {
    to: string;
    from: string;
    templateId: string;
    dynamic_template_data: any;
    subject: string;
}
export declare function sendEmail({ to, from, templateId, dynamic_template_data, subject, }: IRequest): Promise<void>;
export {};
