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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateWeeklyScheduleResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const create_weekly_schedule_service_1 = require("../../usecases/create/create-weekly-schedule.service");
const create_Weekly_schedule_input_1 = require("../../dtos/create-Weekly-schedule-input");
const Weekly_schedule_entity_1 = require("../../entities/Weekly-schedule-entity");
const common_1 = require("@nestjs/common");
const jwt_auth_guard_1 = require("../../../auth/guards/jwt-auth.guard");
const current_user_decorator_1 = require("../../../auth/decorator/current-user.decorator");
let CreateWeeklyScheduleResolver = class CreateWeeklyScheduleResolver {
    constructor(WeeklySchedule) {
        this.WeeklySchedule = WeeklySchedule;
    }
    async CreateWeeklySchedule(user, weekInput) {
        weekInput.doctorId = user.id;
        return await this.WeeklySchedule.create(weekInput);
    }
};
exports.CreateWeeklyScheduleResolver = CreateWeeklyScheduleResolver;
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.GqlAuthGuard),
    (0, graphql_1.Mutation)(() => Weekly_schedule_entity_1.WeeklySchedules),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, graphql_1.Args)('weekInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_Weekly_schedule_input_1.WeeklyScheduleDTO]),
    __metadata("design:returntype", Promise)
], CreateWeeklyScheduleResolver.prototype, "CreateWeeklySchedule", null);
exports.CreateWeeklyScheduleResolver = CreateWeeklyScheduleResolver = __decorate([
    (0, graphql_1.Resolver)('CreateWeeklySchedule'),
    __metadata("design:paramtypes", [create_weekly_schedule_service_1.CreateWeeklyScheduleService])
], CreateWeeklyScheduleResolver);
//# sourceMappingURL=createWeekly-schedule.resolver.js.map