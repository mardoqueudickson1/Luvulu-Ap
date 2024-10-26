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
exports.AssociateDoctorResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const current_user_decorator_1 = require("../../../auth/decorator/current-user.decorator");
const doctorInstitution_1 = require("../../dtos/doctorInstitution");
const associate_doctor_service_1 = require("../../usecases/associate-doctor/associate-doctor.service");
const doctor_entity_1 = require("../../entities/doctor.entity");
const common_1 = require("@nestjs/common");
const jwt_auth_guard_1 = require("../../../auth/guards/jwt-auth.guard");
let AssociateDoctorResolver = class AssociateDoctorResolver {
    constructor(repo) {
        this.repo = repo;
    }
    async AssociateDoctor(user, input) {
        input.institutionId = user.userId;
        return await this.repo.associateDoctor(input);
    }
};
exports.AssociateDoctorResolver = AssociateDoctorResolver;
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.GqlAuthGuard),
    (0, graphql_1.Mutation)(() => doctor_entity_1.DoctorInstitutions),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, graphql_1.Args)('data')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, doctorInstitution_1.AssociateDoctorInput]),
    __metadata("design:returntype", Promise)
], AssociateDoctorResolver.prototype, "AssociateDoctor", null);
exports.AssociateDoctorResolver = AssociateDoctorResolver = __decorate([
    (0, graphql_1.Resolver)(),
    __metadata("design:paramtypes", [associate_doctor_service_1.AssociateDoctorService])
], AssociateDoctorResolver);
//# sourceMappingURL=associate-doctor.resolver.js.map