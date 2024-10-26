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
exports.ProfileDoctorService = void 0;
const errorsMessages_1 = require("../../../../utils/shared/errorsMessages");
const common_1 = require("@nestjs/common");
const IDoctorRepository_1 = require("../../repository/interface/IDoctorRepository");
const findPhotoFile_1 = require("../../../../utils/shared/providers/storageProviders/implementations/supaBase/findPhotoFile");
let ProfileDoctorService = class ProfileDoctorService {
    constructor(doctor) {
        this.doctor = doctor;
    }
    async profile(id) {
        try {
            const doctor = await this.doctor.profile(id);
            if (doctor.user.avatar !== null) {
                const url = await findPhotoFile_1.findSupabaseFileService.getPhotoUrl(doctor.user.avatar);
                doctor.user.avatar = url.toString();
            }
            if (!doctor) {
                throw new common_1.NotFoundException(errorsMessages_1.messages.doctorNotFound);
            }
            return doctor;
        }
        catch (error) {
            throw error;
        }
    }
};
exports.ProfileDoctorService = ProfileDoctorService;
exports.ProfileDoctorService = ProfileDoctorService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [IDoctorRepository_1.IDoctorRepository])
], ProfileDoctorService);
//# sourceMappingURL=perfil-doctor.service.js.map