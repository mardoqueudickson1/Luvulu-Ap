import { WeeklySchedule } from '@prisma/client';
export declare class WorkingHours {
    startTime: string;
    endTime: string;
}
export declare class Hours {
    startTime: string;
    endTime: string;
}
export declare class WeeklySchedules implements WeeklySchedule {
    id: string;
    doctorId: string;
    institutionId: string;
    dayOfWeek: Date;
    startTime: number;
    endTime: number;
    interval: number;
    dailyWorkingHours: number;
    availabeHours?: string[] | null;
    message?: string;
    createdAt: Date;
    updatedAt: Date;
}
