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
exports.PrismaServicesClinicRepositoy = void 0;
const prisma_service_1 = require("../../../prisma/prisma.service");
const common_1 = require("@nestjs/common");
const errorsMessages_1 = require("../../../../utils/shared/errorsMessages");
let PrismaServicesClinicRepositoy = class PrismaServicesClinicRepositoy {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(input) {
        return this.prisma.services.create({
            data: input,
        });
    }
    async findUser(id) {
        const user = await this.prisma.user.findUnique({
            where: {
                id: id,
            },
            select: {
                id: true,
                Institution: {
                    select: {
                        id: true,
                    },
                },
            },
        });
        if (!user) {
            throw new common_1.NotFoundException(errorsMessages_1.messages.userNotfound);
        }
        const result = {
            Institution: user.Institution[0],
        };
        return result;
    }
    async findById(id) {
        return await this.prisma.services.findUnique({ where: { id: id } });
    }
    async remove({ id }) {
        await this.prisma.services.delete({ where: { id: id } });
    }
    async findAll(clinicId) {
        return await this.prisma.services.findMany({
            where: { id: clinicId },
            include: { institution: true },
        });
    }
    async findByName(name) {
        return await this.prisma.services.findFirst({
            where: {
                name: name,
            },
        });
    }
    async findClinicById(id) {
        const user = await this.prisma.user.findUnique({
            where: {
                id: id,
            },
            select: {
                id: true,
                Institution: {
                    select: {
                        id: true,
                    },
                },
            },
        });
        const result = {
            clinic: user.Institution[0],
        };
        return result;
    }
    async update(id, input) {
        const services = await this.prisma.services.update({
            where: { id },
            data: input,
        });
        return services;
    }
};
exports.PrismaServicesClinicRepositoy = PrismaServicesClinicRepositoy;
exports.PrismaServicesClinicRepositoy = PrismaServicesClinicRepositoy = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PrismaServicesClinicRepositoy);
//# sourceMappingURL=prismaServicesClinicRepository.js.map