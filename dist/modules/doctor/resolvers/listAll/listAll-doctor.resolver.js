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
exports.ListAlldoctorResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const listaAll_doctor_service_1 = require("../../usecases/listAll/listaAll-doctor.service");
const response_all_doctor_1 = require("../../dtos/response-all-doctor");
let ListAlldoctorResolver = class ListAlldoctorResolver {
    constructor(doctorService) {
        this.doctorService = doctorService;
    }
    async findAllDoctor() {
        return await this.doctorService.listAll();
    }
};
exports.ListAlldoctorResolver = ListAlldoctorResolver;
__decorate([
    (0, graphql_1.Query)(() => [response_all_doctor_1.ResponseAllDoctor]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ListAlldoctorResolver.prototype, "findAllDoctor", null);
exports.ListAlldoctorResolver = ListAlldoctorResolver = __decorate([
    (0, graphql_1.Resolver)(() => response_all_doctor_1.ResponseAllDoctor),
    __metadata("design:paramtypes", [listaAll_doctor_service_1.ListAllDoctorService])
], ListAlldoctorResolver);
//# sourceMappingURL=listAll-doctor.resolver.js.map