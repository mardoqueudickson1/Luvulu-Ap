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
exports.FindWeeklyScheduleByClinicIdService = void 0;
const common_1 = require("@nestjs/common");
const moment = require("moment");
const IWeeklyScheduleRepository_1 = require("../../repository/interface/IWeeklyScheduleRepository");
let FindWeeklyScheduleByClinicIdService = class FindWeeklyScheduleByClinicIdService {
    constructor(repo) {
        this.repo = repo;
    }
    async findAll(id, doctorId) {
        const result = await this.repo.findByClinicId(id, doctorId);
        for (const data of result) {
            const horas = calculateAvailabeHours(data);
            data.availabeHours = horas;
        }
        return result;
    }
};
exports.FindWeeklyScheduleByClinicIdService = FindWeeklyScheduleByClinicIdService;
exports.FindWeeklyScheduleByClinicIdService = FindWeeklyScheduleByClinicIdService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [IWeeklyScheduleRepository_1.IWeeklyScheduleRepository])
], FindWeeklyScheduleByClinicIdService);
function calculateAvailabeHours(schedule) {
    const { dailyWorkingHours, startTime, endTime, interval } = schedule;
    const horasDisponiveis = [];
    let currentTime = moment().set('hour', startTime).set('minute', 0);
    while (moment(currentTime).isBefore(moment().set('hour', endTime))) {
        horasDisponiveis.push(currentTime.format('HH:mm'));
        currentTime = moment(currentTime).add(interval, 'minutes');
    }
    return horasDisponiveis.slice(0, (dailyWorkingHours * 60) / interval);
}
//# sourceMappingURL=find-all-weekly-schedule.service.js.map