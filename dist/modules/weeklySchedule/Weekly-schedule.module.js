"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WeeklyScheduleModule = void 0;
const common_1 = require("@nestjs/common");
const prisma_module_1 = require("../prisma/prisma.module");
const prisma_WorkCalendarRepository_1 = require("./repository/implementations/prisma-WorkCalendarRepository");
const IWeeklyScheduleRepository_1 = require("./repository/interface/IWeeklyScheduleRepository");
const createWeekly_schedule_resolver_1 = require("./resolvers/create/createWeekly-schedule.resolver");
const create_weekly_schedule_service_1 = require("./usecases/create/create-weekly-schedule.service");
const find_all_weekly_schedule_service_1 = require("./usecases/find-all/find-all-weekly-schedule.service");
const find_one_weekly_schedule_service_1 = require("./usecases/find-one/find-one-weekly-schedule.service");
const update_weekly_schedule__service_1 = require("./usecases/update/update-weekly-schedule..service");
const remove_weekly_schedule_service_1 = require("./usecases/remove/remove-weekly-schedule.service");
const find_all_weekly_schedule_resolver_1 = require("./resolvers/find-all/find-all-weekly-schedule.resolver");
const find_one_weekly_schedule_resolver_1 = require("./resolvers/find-one/find-one-weekly-schedule.resolver");
const update_weekly_schedule_resolver_1 = require("./resolvers/update/update-weekly-schedule.resolver");
const remove_weekly_schedule_resolver_1 = require("./resolvers/remove/remove-weekly-schedule.resolver");
const find_all_weekly_schedule_resolver_2 = require("./resolvers/find-by-clinicId/find-all-weekly-schedule.resolver");
const find_all_weekly_schedule_service_2 = require("./usecases/find-by-clinicId/find-all-weekly-schedule.service");
let WeeklyScheduleModule = class WeeklyScheduleModule {
};
exports.WeeklyScheduleModule = WeeklyScheduleModule;
exports.WeeklyScheduleModule = WeeklyScheduleModule = __decorate([
    (0, common_1.Module)({
        imports: [prisma_module_1.PrismaModule],
        providers: [
            create_weekly_schedule_service_1.CreateWeeklyScheduleService,
            find_all_weekly_schedule_service_1.FindAllWeeklyScheduleService,
            find_one_weekly_schedule_service_1.FindOneWeeklyScheduleService,
            update_weekly_schedule__service_1.updateWeeklyScheduleService,
            remove_weekly_schedule_service_1.RemoveWeeklyScheduleService,
            find_all_weekly_schedule_service_2.FindWeeklyScheduleByClinicIdService,
            createWeekly_schedule_resolver_1.CreateWeeklyScheduleResolver,
            find_all_weekly_schedule_resolver_1.FindAllWeeklyScheduleResolver,
            find_one_weekly_schedule_resolver_1.FindOneWeeklyScheduleResolver,
            update_weekly_schedule_resolver_1.UpdateWeeklyScheduleesolver,
            remove_weekly_schedule_resolver_1.RemoveWeeklyScheduleResolver,
            find_all_weekly_schedule_resolver_2.FindAllWeeklyScheduleByClinicIdResolver,
            {
                provide: IWeeklyScheduleRepository_1.IWeeklyScheduleRepository,
                useClass: prisma_WorkCalendarRepository_1.PrismaWeeklyScheduleRepository,
            },
        ],
    })
], WeeklyScheduleModule);
//# sourceMappingURL=Weekly-schedule.module.js.map