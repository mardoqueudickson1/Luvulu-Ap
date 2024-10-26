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
exports.UpdateAvatarPatientResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const graphql_upload_ts_1 = require("graphql-upload-ts");
const update_patient_avatar_service_1 = require("../../usecases/updateAvatar/update-patient-avatar.service");
const current_user_decorator_1 = require("../../../auth/decorator/current-user.decorator");
const jwt_auth_guard_1 = require("../../../auth/guards/jwt-auth.guard");
const patient_entity_1 = require("../../../patient/entities/patient.entity");
let UpdateAvatarPatientResolver = class UpdateAvatarPatientResolver {
    constructor(updatePatientAvatarService) {
        this.updatePatientAvatarService = updatePatientAvatarService;
    }
    async updatePatientAvatar(file, user) {
        const patientIdLogged = await this.updatePatientAvatarService.getPatientID(user.userId);
        const patientId = patientIdLogged.patient.id;
        return this.updatePatientAvatarService.execute(patientId, file);
    }
};
exports.UpdateAvatarPatientResolver = UpdateAvatarPatientResolver;
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.GqlAuthGuard),
    (0, graphql_1.Mutation)(() => patient_entity_1.Patients),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('userAvatar')),
    __param(0, (0, graphql_1.Args)('userAvatar', { type: () => graphql_upload_ts_1.GraphQLUpload })),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], UpdateAvatarPatientResolver.prototype, "updatePatientAvatar", null);
exports.UpdateAvatarPatientResolver = UpdateAvatarPatientResolver = __decorate([
    (0, graphql_1.Resolver)('Patients'),
    __metadata("design:paramtypes", [update_patient_avatar_service_1.UpdatePatientAvatarService])
], UpdateAvatarPatientResolver);
//# sourceMappingURL=update-patient-avatar.resolver.js.map