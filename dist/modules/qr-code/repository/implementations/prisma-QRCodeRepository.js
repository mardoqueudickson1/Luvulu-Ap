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
exports.PrismaQRCodeRepository = void 0;
const prisma_service_1 = require("../../../prisma/prisma.service");
const common_1 = require("@nestjs/common");
let PrismaQRCodeRepository = class PrismaQRCodeRepository {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findByData(data) {
        const existingQrCode = await this.prisma.qrcode.findFirst({
            where: { code: data.code },
        });
        return existingQrCode;
    }
    async update(id, data) {
        return await this.prisma.qrcode.update({
            where: { id: id },
            data: data,
        });
    }
    async create(data) {
        return await this.prisma.qrcode.create({ data });
    }
    async findByID(id) {
        const data = await this.prisma.user.findUnique({
            where: { id: id },
            include: {
                Patient: {
                    select: {
                        id: true,
                        number: true,
                    },
                },
            },
        });
        const result = {
            id: data.id,
            name: data.name,
            email: data.email,
            BI: data.BI,
            nationality: data.nationality,
            phone: data.phone,
            birthday: data.birthday,
            gender: data.gender,
            neigbhod: data.neigbhod,
            city: data.city,
            nif: data.nif,
            FatherName: data.FatherName,
            MotherName: data.MotherName,
            municipality: data.municipality,
            addressComplement: data.addressComplement,
            paciente_number: data.Patient[0].number,
            pacienteId: data.Patient[0].id,
        };
        return result;
    }
};
exports.PrismaQRCodeRepository = PrismaQRCodeRepository;
exports.PrismaQRCodeRepository = PrismaQRCodeRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PrismaQRCodeRepository);
//# sourceMappingURL=prisma-QRCodeRepository.js.map