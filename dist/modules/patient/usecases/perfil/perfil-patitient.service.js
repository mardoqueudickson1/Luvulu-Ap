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
exports.ProfilePatientService = void 0;
const IPatientRepository_1 = require("../../repository/interface/IPatientRepository");
const errorsMessages_1 = require("../../../../utils/shared/errorsMessages");
const common_1 = require("@nestjs/common");
let ProfilePatientService = class ProfilePatientService {
    constructor(patitientRepo) {
        this.patitientRepo = patitientRepo;
    }
    async profile(id) {
        try {
            const patitient = await this.patitientRepo.profile(id);
            if (!patitient) {
                throw new common_1.NotFoundException(errorsMessages_1.messages.patientNotFound);
            }
            return patitient;
        }
        catch (error) {
            throw error;
        }
    }
};
exports.ProfilePatientService = ProfilePatientService;
exports.ProfilePatientService = ProfilePatientService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [IPatientRepository_1.IPatientRepository])
], ProfilePatientService);
//# sourceMappingURL=perfil-patitient.service.js.map