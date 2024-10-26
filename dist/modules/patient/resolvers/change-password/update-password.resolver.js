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
exports.UpdatePasswordResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const common_1 = require("@nestjs/common");
const jwt_auth_guard_1 = require("../../../auth/guards/jwt-auth.guard");
const patient_entity_1 = require("../../entities/patient.entity");
const change_password_1 = require("../../dtos/change-password");
const update_password_service_1 = require("../../usecases/change-password/update-password.service");
const current_user_decorator_1 = require("../../../auth/decorator/current-user.decorator");
let UpdatePasswordResolver = class UpdatePasswordResolver {
    constructor(passwordService) {
        this.passwordService = passwordService;
    }
    async changePatientPassword(data, user) {
        const patientId = await this.passwordService.getPatientID(user.userId);
        data.patientId = patientId.patient.id;
        return await this.passwordService.update(data);
    }
};
exports.UpdatePasswordResolver = UpdatePasswordResolver;
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.GqlAuthGuard),
    (0, graphql_1.Mutation)(() => patient_entity_1.Patients),
    __param(0, (0, graphql_1.Args)('data')),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [change_password_1.changePasswordInput, Object]),
    __metadata("design:returntype", Promise)
], UpdatePasswordResolver.prototype, "changePatientPassword", null);
exports.UpdatePasswordResolver = UpdatePasswordResolver = __decorate([
    (0, graphql_1.Resolver)('change-password'),
    __metadata("design:paramtypes", [update_password_service_1.UpdatePasswordService])
], UpdatePasswordResolver);
//# sourceMappingURL=update-password.resolver.js.map