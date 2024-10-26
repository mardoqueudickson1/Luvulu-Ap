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
exports.DoctorScheduleOutput = exports.institutionOutput = exports.DoctorOutput = exports.UserOutput = void 0;
const graphql_1 = require("@nestjs/graphql");
let UserOutput = class UserOutput {
};
exports.UserOutput = UserOutput;
__decorate([
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], UserOutput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], UserOutput.prototype, "name", void 0);
exports.UserOutput = UserOutput = __decorate([
    (0, graphql_1.ObjectType)()
], UserOutput);
let DoctorOutput = class DoctorOutput {
};
exports.DoctorOutput = DoctorOutput;
__decorate([
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], DoctorOutput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], DoctorOutput.prototype, "bio", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserOutput),
    __metadata("design:type", UserOutput)
], DoctorOutput.prototype, "user", void 0);
exports.DoctorOutput = DoctorOutput = __decorate([
    (0, graphql_1.ObjectType)()
], DoctorOutput);
let institutionOutput = class institutionOutput {
};
exports.institutionOutput = institutionOutput;
__decorate([
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], institutionOutput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserOutput),
    __metadata("design:type", UserOutput)
], institutionOutput.prototype, "user", void 0);
exports.institutionOutput = institutionOutput = __decorate([
    (0, graphql_1.ObjectType)()
], institutionOutput);
let DoctorScheduleOutput = class DoctorScheduleOutput {
};
exports.DoctorScheduleOutput = DoctorScheduleOutput;
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], DoctorScheduleOutput.prototype, "dayOfWeek", void 0);
__decorate([
    (0, graphql_1.Field)(() => DoctorOutput),
    __metadata("design:type", DoctorOutput)
], DoctorScheduleOutput.prototype, "doctor", void 0);
__decorate([
    (0, graphql_1.Field)(() => institutionOutput),
    __metadata("design:type", institutionOutput)
], DoctorScheduleOutput.prototype, "institution", void 0);
__decorate([
    (0, graphql_1.Field)(() => [String]),
    __metadata("design:type", Array)
], DoctorScheduleOutput.prototype, "hours", void 0);
exports.DoctorScheduleOutput = DoctorScheduleOutput = __decorate([
    (0, graphql_1.ObjectType)()
], DoctorScheduleOutput);
//# sourceMappingURL=doctor-schedule-output.js.map