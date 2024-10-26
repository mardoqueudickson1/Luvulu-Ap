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
exports.ListAllAppointmentService = void 0;
const IAppointmentRepository_1 = require("../../repository/interface/IAppointmentRepository");
const common_1 = require("@nestjs/common");
let ListAllAppointmentService = class ListAllAppointmentService {
    constructor(appointmentRepo) {
        this.appointmentRepo = appointmentRepo;
    }
    async listAll() {
        const appointments = await this.appointmentRepo.findAll();
        return appointments;
    }
};
exports.ListAllAppointmentService = ListAllAppointmentService;
exports.ListAllAppointmentService = ListAllAppointmentService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [IAppointmentRepository_1.IAppointmentRepository])
], ListAllAppointmentService);
//# sourceMappingURL=listaAll-appointment.service.js.map