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
exports.RemoveServicesClinicService = void 0;
const IServicesClinicRepository_1 = require("../../repository/interface/IServicesClinicRepository");
const common_1 = require("@nestjs/common");
let RemoveServicesClinicService = class RemoveServicesClinicService {
    constructor(serviceRepo) {
        this.serviceRepo = serviceRepo;
    }
    async remove(id) {
        try {
            const services = await this.serviceRepo.findById(id);
            if (!services) {
                throw new common_1.NotFoundException('Ups, Serviço não encontrado.');
            }
            return await this.serviceRepo.remove({ id });
        }
        catch (error) {
            throw error;
        }
    }
};
exports.RemoveServicesClinicService = RemoveServicesClinicService;
exports.RemoveServicesClinicService = RemoveServicesClinicService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [IServicesClinicRepository_1.IServicesClinicRepository])
], RemoveServicesClinicService);
//# sourceMappingURL=remove-services-clinic.service.js.map