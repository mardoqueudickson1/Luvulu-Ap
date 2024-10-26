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
exports.UpdateDoctorResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const doctor_entity_1 = require("../../entities/doctor.entity");
const update_doctor_input_1 = require("../../dtos/update-doctor.input");
const common_1 = require("@nestjs/common");
const current_user_decorator_1 = require("../../../auth/decorator/current-user.decorator");
const jwt_auth_guard_1 = require("../../../auth/guards/jwt-auth.guard");
const update_doctor_service_1 = require("../../usecases/update/update-doctor.service");
let UpdateDoctorResolver = class UpdateDoctorResolver {
    constructor(doctorService) {
        this.doctorService = doctorService;
    }
    async updateDoctorInfo(data, user) {
        const doctorId = await this.doctorService.getDoctorId(user.userId);
        data.id = doctorId.Doctor.id;
        return await this.doctorService.update(data);
    }
};
exports.UpdateDoctorResolver = UpdateDoctorResolver;
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.GqlAuthGuard),
    (0, graphql_1.Mutation)(() => doctor_entity_1.Doctors),
    __param(0, (0, graphql_1.Args)('data')),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_doctor_input_1.UpdateDoctorInput, Object]),
    __metadata("design:returntype", Promise)
], UpdateDoctorResolver.prototype, "updateDoctorInfo", null);
exports.UpdateDoctorResolver = UpdateDoctorResolver = __decorate([
    (0, graphql_1.Resolver)('updateDoctor'),
    __metadata("design:paramtypes", [update_doctor_service_1.UpdateDoctorService])
], UpdateDoctorResolver);
//# sourceMappingURL=update-doctor.resolver.js.map