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
exports.ConsultationTypeRepositoy = void 0;
const prisma_service_1 = require("../../../prisma/prisma.service");
const common_1 = require("@nestjs/common");
let ConsultationTypeRepositoy = class ConsultationTypeRepositoy {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(data) {
        return this.prisma.consultationType.create({
            data: {
                name: data.name,
                description: data.description,
            },
        });
    }
    async update(id, data) {
        return this.prisma.consultationType.update({
            where: { id: id },
            data: data,
        });
    }
    async findById(id) {
        return await this.prisma.consultationType.findUnique({ where: { id: id } });
    }
    async findByName(name) {
        return await this.prisma.consultationType.findFirst({
            where: { name: name },
        });
    }
    async remove({ id }) {
        await this.prisma.consultationType.delete({ where: { id: id } });
    }
    async findAll() {
        return await this.prisma.consultationType.findMany();
    }
};
exports.ConsultationTypeRepositoy = ConsultationTypeRepositoy;
exports.ConsultationTypeRepositoy = ConsultationTypeRepositoy = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ConsultationTypeRepositoy);
//# sourceMappingURL=prisma-ConsultationTypesRepository.js.map