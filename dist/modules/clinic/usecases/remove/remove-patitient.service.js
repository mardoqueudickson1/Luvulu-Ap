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
exports.RemoveClinicService = void 0;
const IClinicRepository_1 = require("../../repository/interface/IClinicRepository");
const common_1 = require("@nestjs/common");
let RemoveClinicService = class RemoveClinicService {
    constructor(clinicRepo) {
        this.clinicRepo = clinicRepo;
    }
    async remove(id) {
        try {
            const clinic = await this.clinicRepo.findById(id);
            if (!clinic) {
                throw new common_1.NotFoundException('Ups, Clínica não encontrado.');
            }
            return await this.clinicRepo.remove({ id });
        }
        catch (error) {
            throw error;
        }
    }
};
exports.RemoveClinicService = RemoveClinicService;
exports.RemoveClinicService = RemoveClinicService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [IClinicRepository_1.IClinicRepository])
], RemoveClinicService);
//# sourceMappingURL=remove-patitient.service.js.map