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
exports.ProfileClinicService = void 0;
const errorsMessages_1 = require("../../../../utils/shared/errorsMessages");
const common_1 = require("@nestjs/common");
const IClinicRepository_1 = require("../../repository/interface/IClinicRepository");
const findPhotoFile_1 = require("../../../../utils/shared/providers/storageProviders/implementations/supaBase/findPhotoFile");
let ProfileClinicService = class ProfileClinicService {
    constructor(clinicRepo) {
        this.clinicRepo = clinicRepo;
    }
    async profile(id) {
        try {
            const clinic = await this.clinicRepo.profile(id);
            if (!clinic) {
                throw new common_1.NotFoundException(errorsMessages_1.messages.clinicNotFound);
            }
            if (clinic.user.avatar !== null) {
                const url = await findPhotoFile_1.findSupabaseFileService.getPhotoUrl(clinic.user.avatar);
                clinic.user.avatar = url.toString();
            }
            return clinic;
        }
        catch (error) {
            throw error;
        }
    }
};
exports.ProfileClinicService = ProfileClinicService;
exports.ProfileClinicService = ProfileClinicService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [IClinicRepository_1.IClinicRepository])
], ProfileClinicService);
//# sourceMappingURL=perfil-clinic.service.js.map