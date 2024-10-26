"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateWeeklyScheduleService = void 0;
const common_1 = require("@nestjs/common");
const IWeeklyScheduleRepository_1 = require("../../repository/interface/IWeeklyScheduleRepository");
let CreateWeeklyScheduleService = class CreateWeeklyScheduleService {
    constructor(weekRepo) {
        this.weekRepo = weekRepo;
    }
    async create(data) {
        const { data: scheduleData } = data;
        const createdSchedules = [];
        for (const scheduleItem of scheduleData) {
            const { institutionId, dayOfWeek, startTime, endTime, interval, dailyWorkingHours, } = scheduleItem;
            const weekSchedule = await this.weekRepo.create({
                dayOfWeek,
                startTime,
                endTime,
                institutionId,
                interval,
                doctorId: data.doctorId,
                dailyWorkingHours,
            });
            createdSchedules.push(weekSchedule);
        }
        return { message: 'Carga horária adicionada com sucesso' };
    }
};
exports.CreateWeeklyScheduleService = CreateWeeklyScheduleService;
exports.CreateWeeklyScheduleService = CreateWeeklyScheduleService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [IWeeklyScheduleRepository_1.IWeeklyScheduleRepository])
], CreateWeeklyScheduleService);
//# sourceMappingURL=create-weekly-schedule.service.js.map