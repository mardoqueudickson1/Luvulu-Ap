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
exports.FindAllConsultationTypesResolver = void 0;
const consultationType_entity_1 = require("../../entities/consultationType.entity");
const graphql_1 = require("@nestjs/graphql");
const list_all_consultationType_service_1 = require("../../usecases/list-all/list-all-consultationType.service");
let FindAllConsultationTypesResolver = class FindAllConsultationTypesResolver {
    constructor(consulTypeService) {
        this.consulTypeService = consulTypeService;
    }
    async findAllConsultationType() {
        return await this.consulTypeService.findAll();
    }
};
exports.FindAllConsultationTypesResolver = FindAllConsultationTypesResolver;
__decorate([
    (0, graphql_1.Query)(() => [consultationType_entity_1.ConsultationTypes]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], FindAllConsultationTypesResolver.prototype, "findAllConsultationType", null);
exports.FindAllConsultationTypesResolver = FindAllConsultationTypesResolver = __decorate([
    (0, graphql_1.Resolver)(),
    __metadata("design:paramtypes", [list_all_consultationType_service_1.ListAllConsultationTypeService])
], FindAllConsultationTypesResolver);
//# sourceMappingURL=find-all-consultationType.resolver.js.map