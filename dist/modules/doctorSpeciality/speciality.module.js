"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.specialiatyModule = void 0;
const prisma_module_1 = require("../prisma/prisma.module");
const common_1 = require("@nestjs/common");
const auth_module_1 = require("../auth/auth.module");
const prismaServicesClinicRepository_1 = require("./repository/implementations/prismaServicesClinicRepository");
const IServicesClinicRepository_1 = require("./repository/interface/IServicesClinicRepository");
const create_speciality_resolver_1 = require("./resolvers/create/create-speciality.resolver");
const create_services_clinic_service_1 = require("./usecases/create/create-services-clinic.service");
const listaAll_services_clinic_service_1 = require("./usecases/listAll/listaAll-services-clinic.service");
const listAll_speciality_resolver_1 = require("./resolvers/listAll/listAll-speciality.resolver");
let specialiatyModule = class specialiatyModule {
};
exports.specialiatyModule = specialiatyModule;
exports.specialiatyModule = specialiatyModule = __decorate([
    (0, common_1.Module)({
        imports: [prisma_module_1.PrismaModule, auth_module_1.AuthModule],
        providers: [
            create_services_clinic_service_1.CreateSpecialityService,
            listaAll_services_clinic_service_1.ListAllSpecialityService,
            create_speciality_resolver_1.CreateSpecialityResolver,
            listAll_speciality_resolver_1.FindAllSpecialityResolver,
            {
                provide: IServicesClinicRepository_1.ISpecialityRepository,
                useClass: prismaServicesClinicRepository_1.PrismaServicesClinicRepositoy,
            },
        ],
        exports: [],
    })
], specialiatyModule);
//# sourceMappingURL=speciality.module.js.map