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
exports.ListAllDoctorByclinicIDResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const jwt_auth_guard_1 = require("../../../auth/guards/jwt-auth.guard");
const list_All_by_clinicID_service_1 = require("../../usecases/list-All-by-clinicID/list-All-by-clinicID.service");
const common_1 = require("@nestjs/common");
const response_all_doctor_1 = require("../../dtos/response-all-doctor");
const current_user_decorator_1 = require("../../../auth/decorator/current-user.decorator");
let ListAllDoctorByclinicIDResolver = class ListAllDoctorByclinicIDResolver {
    constructor(doctorService) {
        this.doctorService = doctorService;
    }
    async findAllDoctorsByClinicID(user) {
        return await this.doctorService.listAllByClinicID(user.userId);
    }
};
exports.ListAllDoctorByclinicIDResolver = ListAllDoctorByclinicIDResolver;
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.GqlAuthGuard),
    (0, graphql_1.Query)(() => [response_all_doctor_1.ResponseAllDoctor]),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ListAllDoctorByclinicIDResolver.prototype, "findAllDoctorsByClinicID", null);
exports.ListAllDoctorByclinicIDResolver = ListAllDoctorByclinicIDResolver = __decorate([
    (0, graphql_1.Resolver)(),
    __metadata("design:paramtypes", [list_All_by_clinicID_service_1.ListAllDoctorByclinicIDService])
], ListAllDoctorByclinicIDResolver);
//# sourceMappingURL=list-all-by-ClinicID.resolver.js.map