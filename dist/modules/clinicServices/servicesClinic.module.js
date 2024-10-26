"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServicesClinicModule = void 0;
const prisma_module_1 = require("../prisma/prisma.module");
const common_1 = require("@nestjs/common");
const auth_module_1 = require("../auth/auth.module");
const create_services_clinic_service_1 = require("./usecases/create/create-services-clinic.service");
const remove_services_clinic_service_1 = require("./usecases/remove/remove-services-clinic.service");
const create_services_clinic_resolver_1 = require("./resolvers/create/create-services-clinic.resolver");
const remove_services_clinic_resolver_1 = require("./resolvers/remove/remove-services-clinic.resolver");
const IServicesClinicRepository_1 = require("./repository/interface/IServicesClinicRepository");
const prismaServicesClinicRepository_1 = require("./repository/implementations/prismaServicesClinicRepository");
const IClinicRepository_1 = require("../clinic/repository/interface/IClinicRepository");
const prismaClinicRepository_1 = require("../clinic/repository/implementations/prismaClinicRepository");
const listAll_services_ByclinicId_resolver_1 = require("./resolvers/listAll/listAll-services-ByclinicId.resolver");
const listaAll_services_ByclinicId_service_1 = require("./usecases/listAllByclinicId/listaAll-services-ByclinicId.service");
const update_clinicServices_resolver_1 = require("./resolvers/update/update-clinicServices.resolver");
const update_clinicService_service_1 = require("./usecases/update/update-clinicService.service");
let ServicesClinicModule = class ServicesClinicModule {
};
exports.ServicesClinicModule = ServicesClinicModule;
exports.ServicesClinicModule = ServicesClinicModule = __decorate([
    (0, common_1.Module)({
        imports: [prisma_module_1.PrismaModule, auth_module_1.AuthModule],
        providers: [
            create_services_clinic_service_1.CreateServicesClinicService,
            remove_services_clinic_service_1.RemoveServicesClinicService,
            listaAll_services_ByclinicId_service_1.ListAllServicesBydClinicIdClinicService,
            update_clinicService_service_1.UpdateServicesClinicService,
            create_services_clinic_resolver_1.CreateServicesClinicResolver,
            remove_services_clinic_resolver_1.RemoveServicesClinicResolver,
            listAll_services_ByclinicId_resolver_1.ListAllServicesByClinicIdResolver,
            update_clinicServices_resolver_1.UpdateClinicServicesResolver,
            {
                provide: IServicesClinicRepository_1.IServicesClinicRepository,
                useClass: prismaServicesClinicRepository_1.PrismaServicesClinicRepositoy,
            },
            {
                provide: IClinicRepository_1.IClinicRepository,
                useClass: prismaClinicRepository_1.PrismaClinicRepositoy,
            },
        ],
        exports: [],
    })
], ServicesClinicModule);
//# sourceMappingURL=servicesClinic.module.js.map