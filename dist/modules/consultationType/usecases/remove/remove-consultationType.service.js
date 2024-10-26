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
exports.RemoveConsultationTypeService = void 0;
const common_1 = require("@nestjs/common");
const IConsultatioTypeRepository_1 = require("../../repository/interface/IConsultatioTypeRepository");
const errorsMessages_1 = require("../../../../utils/shared/errorsMessages");
let RemoveConsultationTypeService = class RemoveConsultationTypeService {
    constructor(typeRepo) {
        this.typeRepo = typeRepo;
    }
    async remove(id) {
        try {
            const typeConsult = await this.typeRepo.findById(id);
            if (!typeConsult) {
                throw new common_1.NotFoundException(errorsMessages_1.messages.typeNotFound);
            }
            return await this.typeRepo.remove({ id });
        }
        catch (error) {
            throw error;
        }
    }
};
exports.RemoveConsultationTypeService = RemoveConsultationTypeService;
exports.RemoveConsultationTypeService = RemoveConsultationTypeService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [IConsultatioTypeRepository_1.IConsultatioTypeRepository])
], RemoveConsultationTypeService);
//# sourceMappingURL=remove-consultationType.service.js.map