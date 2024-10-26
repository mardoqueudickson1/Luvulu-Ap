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
exports.PrismaConfirmationCodeRepository = void 0;
const prisma_service_1 = require("../../../prisma/prisma.service");
const common_1 = require("@nestjs/common");
let PrismaConfirmationCodeRepository = class PrismaConfirmationCodeRepository {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(data) {
        const confirmation = await this.prisma.passwordConfirmationCode.create({
            data: {
                code: data.code,
                expiresAt: data.expiresAt,
                userId: data.userId,
            },
        });
        return confirmation;
    }
    async verifyConfirmationCode(userId, code) {
        const confirmationCode = await this.prisma.passwordConfirmationCode.findUnique({
            where: { userId, code },
        });
        if (!confirmationCode || confirmationCode.expiresAt < new Date()) {
            throw new common_1.NotFoundException('Código inválido ou expirado.');
        }
        await this.deleteConfirmationCode(confirmationCode.id);
        return true;
    }
    async deleteConfirmationCode(id) {
        await this.prisma.passwordConfirmationCode.delete({
            where: { id: id },
        });
    }
};
exports.PrismaConfirmationCodeRepository = PrismaConfirmationCodeRepository;
exports.PrismaConfirmationCodeRepository = PrismaConfirmationCodeRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PrismaConfirmationCodeRepository);
//# sourceMappingURL=prismaConfirmationRepository.js.map