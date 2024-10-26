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
exports.CreateServicesClinicService = void 0;
const IClinicRepository_1 = require("../../../clinic/repository/interface/IClinicRepository");
const IServicesClinicRepository_1 = require("../../repository/interface/IServicesClinicRepository");
const common_1 = require("@nestjs/common");
const errorsMessages_1 = require("../../../../utils/shared/errorsMessages");
let CreateServicesClinicService = class CreateServicesClinicService {
    constructor(servicesClinicRepo, clinicRepo) {
        this.servicesClinicRepo = servicesClinicRepo;
        this.clinicRepo = clinicRepo;
    }
    async create(input) {
        try {
            const nameUpperCase = input.name.toUpperCase();
            const serviceAlreadyExist = await this.servicesClinicRepo.findByName(nameUpperCase);
            if (serviceAlreadyExist) {
                throw new common_1.BadRequestException(errorsMessages_1.messages.servicesFound);
            }
            const { clinic } = await this.servicesClinicRepo.findClinicById(input.institutionId);
            if (!clinic) {
                throw new common_1.BadRequestException(errorsMessages_1.messages.clinicNotFound);
            }
            const services = await this.servicesClinicRepo.create({
                name: nameUpperCase,
                description: input.description,
                price: input.price,
                institutionId: clinic.id,
            });
            return services;
        }
        catch (error) {
            throw error;
        }
    }
};
exports.CreateServicesClinicService = CreateServicesClinicService;
exports.CreateServicesClinicService = CreateServicesClinicService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [IServicesClinicRepository_1.IServicesClinicRepository,
        IClinicRepository_1.IClinicRepository])
], CreateServicesClinicService);
//# sourceMappingURL=create-services-clinic.service.js.map