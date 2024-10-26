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
exports.PrismaFCMRepository = void 0;
const prisma_service_1 = require("../../../prisma/prisma.service");
const common_1 = require("@nestjs/common");
let PrismaFCMRepository = class PrismaFCMRepository {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(data) {
        return await this.prisma.fCMToken.create({ data });
    }
    async findById(id) {
        const data = await this.prisma.user.findUnique({
            where: { id: id },
            include: {
                FCMToken: {
                    select: {
                        id: true,
                        token: true,
                    },
                },
            },
        });
        const result = {
            fcmToken: data.FCMToken.map((e) => e.token),
            id: data.FCMToken.map((e) => e.id),
        };
        return result;
    }
    async remove(id) {
        await this.prisma.fCMToken.delete({
            where: {
                id: id,
            },
        });
    }
    async update(data) {
        return await this.prisma.fCMToken.update({
            where: { id: data.id },
            data: {
                token: data.token,
            },
        });
    }
};
exports.PrismaFCMRepository = PrismaFCMRepository;
exports.PrismaFCMRepository = PrismaFCMRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PrismaFCMRepository);
//# sourceMappingURL=priismaFCMRepository.js.map