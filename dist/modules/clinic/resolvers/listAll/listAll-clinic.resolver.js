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
exports.ListAllClinicResolver = void 0;
const findAll_clinic_output_1 = require("../../dtos/findAll-clinic.output");
const listaAll_clinic_service_1 = require("../../usecases/listAll/listaAll-clinic.service");
const graphql_1 = require("@nestjs/graphql");
let ListAllClinicResolver = class ListAllClinicResolver {
    constructor(cliniService) {
        this.cliniService = cliniService;
    }
    async findAllClinic() {
        return await this.cliniService.listAll();
    }
};
exports.ListAllClinicResolver = ListAllClinicResolver;
__decorate([
    (0, graphql_1.Query)(() => [findAll_clinic_output_1.ClinicResponse]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ListAllClinicResolver.prototype, "findAllClinic", null);
exports.ListAllClinicResolver = ListAllClinicResolver = __decorate([
    (0, graphql_1.Resolver)(() => findAll_clinic_output_1.ClinicOutput),
    __metadata("design:paramtypes", [listaAll_clinic_service_1.ListAllClinicService])
], ListAllClinicResolver);
//# sourceMappingURL=listAll-clinic.resolver.js.map