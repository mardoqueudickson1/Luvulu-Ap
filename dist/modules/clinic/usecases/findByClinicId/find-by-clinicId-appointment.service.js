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
exports.FindAppointmentByClinicIdService = void 0;
const errorsMessages_1 = require("../../../../utils/shared/errorsMessages");
const common_1 = require("@nestjs/common");
const IClinicRepository_1 = require("../../repository/interface/IClinicRepository");
let FindAppointmentByClinicIdService = class FindAppointmentByClinicIdService {
    constructor(institionRepo) {
        this.institionRepo = institionRepo;
    }
    async execute(clinicId) {
        try {
            const { instition } = await this.institionRepo.findUserClinicId(clinicId);
            if (!instition.id) {
                throw new common_1.NotFoundException(errorsMessages_1.messages.patientNotFound);
            }
            const appointments = await this.institionRepo.findAppoitmentByClinicId(instition.id);
            if (!appointments) {
                throw new common_1.NotFoundException('Nenhum agendamento encontrado');
            }
            return appointments;
        }
        catch (error) {
            throw new common_1.InternalServerErrorException(errorsMessages_1.messages.errorPatientAppointment);
        }
    }
};
exports.FindAppointmentByClinicIdService = FindAppointmentByClinicIdService;
exports.FindAppointmentByClinicIdService = FindAppointmentByClinicIdService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [IClinicRepository_1.IClinicRepository])
], FindAppointmentByClinicIdService);
//# sourceMappingURL=find-by-clinicId-appointment.service.js.map