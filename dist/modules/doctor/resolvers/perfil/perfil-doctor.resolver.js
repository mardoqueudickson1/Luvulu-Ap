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
exports.ProfiledoctorResolver = void 0;
const profile_user_response_1 = require("../../../user/dtos/profile-user-response");
const current_user_decorator_1 = require("../../../auth/decorator/current-user.decorator");
const jwt_auth_guard_1 = require("../../../auth/guards/jwt-auth.guard");
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const perfil_doctor_service_1 = require("../../usecases/perfil/perfil-doctor.service");
const profile_doctor_1 = require("../../dtos/profile-doctor");
let ProfiledoctorResolver = class ProfiledoctorResolver {
    constructor(profileDocta) {
        this.profileDocta = profileDocta;
    }
    async doctorProfile(user) {
        return await this.profileDocta.profile(user.id);
    }
};
exports.ProfiledoctorResolver = ProfiledoctorResolver;
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.GqlAuthGuard),
    (0, graphql_1.Query)(() => profile_doctor_1.ResponseProfileDoctor),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [profile_user_response_1.UserProfileResponse]),
    __metadata("design:returntype", Promise)
], ProfiledoctorResolver.prototype, "doctorProfile", null);
exports.ProfiledoctorResolver = ProfiledoctorResolver = __decorate([
    (0, graphql_1.Resolver)(),
    __metadata("design:paramtypes", [perfil_doctor_service_1.ProfileDoctorService])
], ProfiledoctorResolver);
//# sourceMappingURL=perfil-doctor.resolver.js.map