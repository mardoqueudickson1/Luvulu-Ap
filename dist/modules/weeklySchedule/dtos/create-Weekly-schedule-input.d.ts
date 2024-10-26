export declare class ScheduleType {
    doctorId: string;
    institutionId: string;
    dayOfWeek: Date;
    startTime: number;
    endTime: number;
    interval: number;
    dailyWorkingHours: number;
}
export declare class WeeklyScheduleDTO {
    data: ScheduleType[];
    doctorId?: string;
}
