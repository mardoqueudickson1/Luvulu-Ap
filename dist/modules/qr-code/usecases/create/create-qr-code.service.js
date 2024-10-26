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
exports.CreateQrCodeService = void 0;
const common_1 = require("@nestjs/common");
const IQRCodeRepository_1 = require("../../repository/interface/IQRCodeRepository");
const qr = require("qrcode");
let CreateQrCodeService = class CreateQrCodeService {
    constructor(repo) {
        this.repo = repo;
    }
    async create(data) {
        const user = await this.repo.findByID(data.id);
        const qrData = JSON.stringify({
            id: user.id,
            nome: user.name,
            telefone: user.phone,
            Nome_do_Pai: user.FatherName,
            Nome_da_Mae: user.MotherName,
            genero: user.gender,
            Complemento_de_Endereco: user.addressComplement,
            BI: user.BI,
            numero_do_pacinete: user.paciente_number,
        });
        const qrCodeImage = await qr.toDataURL(qrData);
        const qrCodeData = {
            patientId: user.pacienteId,
            code: qrCodeImage,
        };
        const existingQrCode = await this.repo.findByData(qrCodeData);
        if (existingQrCode) {
            return this.repo.update(existingQrCode.id, qrCodeData);
        }
        return await this.repo.create(qrCodeData);
    }
};
exports.CreateQrCodeService = CreateQrCodeService;
exports.CreateQrCodeService = CreateQrCodeService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [IQRCodeRepository_1.IQRCodeRepository])
], CreateQrCodeService);
//# sourceMappingURL=create-qr-code.service.js.map