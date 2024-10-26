"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConsultationTypeModule = void 0;
const common_1 = require("@nestjs/common");
const auth_module_1 = require("../auth/auth.module");
const prisma_ConsultationTypesRepository_1 = require("./repository/implementations/prisma-ConsultationTypesRepository");
const IConsultatioTypeRepository_1 = require("./repository/interface/IConsultatioTypeRepository");
const create_consultationType_resolver_1 = require("./resolvers/create/create-consultationType.resolver");
const find_all_consultationType_resolver_1 = require("./resolvers/find-all/find-all-consultationType.resolver");
const find_one_consultationType_resolver_1 = require("./resolvers/find-one/find-one-consultationType.resolver");
const remove_consultationType_resolver_1 = require("./resolvers/remove/remove-consultationType.resolver");
const update_consultationType_resolver_1 = require("./resolvers/update/update-consultationType.resolver");
const create_consultatioType_service_1 = require("./usecases/create/create-consultatioType.service");
const find_onde_consultationType_service_1 = require("./usecases/find-one/find-onde-consultationType.service");
const list_all_consultationType_service_1 = require("./usecases/list-all/list-all-consultationType.service");
const remove_consultationType_service_1 = require("./usecases/remove/remove-consultationType.service");
const update_consultationType_service_1 = require("./usecases/update/update-consultationType.service");
const prisma_module_1 = require("../prisma/prisma.module");
let ConsultationTypeModule = class ConsultationTypeModule {
};
exports.ConsultationTypeModule = ConsultationTypeModule;
exports.ConsultationTypeModule = ConsultationTypeModule = __decorate([
    (0, common_1.Module)({
        imports: [prisma_module_1.PrismaModule, auth_module_1.AuthModule],
        providers: [
            create_consultatioType_service_1.CreateConsulatationTypeService,
            find_onde_consultationType_service_1.FindOndeConsultationTypeService,
            list_all_consultationType_service_1.ListAllConsultationTypeService,
            remove_consultationType_service_1.RemoveConsultationTypeService,
            update_consultationType_service_1.UpdateConsultationTypeService,
            create_consultationType_resolver_1.CreateConsultationTypeResolver,
            find_all_consultationType_resolver_1.FindAllConsultationTypesResolver,
            find_one_consultationType_resolver_1.FindOneConsultationTypesResolver,
            remove_consultationType_resolver_1.RemoveConsultationTypesResolver,
            update_consultationType_resolver_1.UpdateConsultationTypesResolver,
            {
                provide: IConsultatioTypeRepository_1.IConsultatioTypeRepository,
                useClass: prisma_ConsultationTypesRepository_1.ConsultationTypeRepositoy,
            },
        ],
        exports: [],
    })
], ConsultationTypeModule);
//# sourceMappingURL=consultationType.module.js.map