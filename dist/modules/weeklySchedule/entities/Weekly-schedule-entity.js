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
exports.WeeklySchedules = exports.Hours = exports.WorkingHours = void 0;
const graphql_1 = require("@nestjs/graphql");
class WorkingHours {
}
exports.WorkingHours = WorkingHours;
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], WorkingHours.prototype, "startTime", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], WorkingHours.prototype, "endTime", void 0);
class Hours {
}
exports.Hours = Hours;
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Hours.prototype, "startTime", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Hours.prototype, "endTime", void 0);
let WeeklySchedules = class WeeklySchedules {
};
exports.WeeklySchedules = WeeklySchedules;
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], WeeklySchedules.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], WeeklySchedules.prototype, "doctorId", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], WeeklySchedules.prototype, "institutionId", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Date)
], WeeklySchedules.prototype, "dayOfWeek", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Number)
], WeeklySchedules.prototype, "startTime", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Number)
], WeeklySchedules.prototype, "endTime", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Number)
], WeeklySchedules.prototype, "interval", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Number)
], WeeklySchedules.prototype, "dailyWorkingHours", void 0);
__decorate([
    (0, graphql_1.Field)(() => [String]),
    __metadata("design:type", Array)
], WeeklySchedules.prototype, "availabeHours", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], WeeklySchedules.prototype, "message", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Date)
], WeeklySchedules.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Date)
], WeeklySchedules.prototype, "updatedAt", void 0);
exports.WeeklySchedules = WeeklySchedules = __decorate([
    (0, graphql_1.ObjectType)()
], WeeklySchedules);
//# sourceMappingURL=Weekly-schedule-entity.js.map