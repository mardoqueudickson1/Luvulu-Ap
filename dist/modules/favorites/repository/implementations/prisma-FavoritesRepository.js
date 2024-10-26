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
exports.PrismaFavoriteRepositoy = void 0;
const common_1 = require("@nestjs/common");
const nestjs_prisma_1 = require("nestjs-prisma");
const errorsMessages_1 = require("../../../../utils/shared/errorsMessages");
let PrismaFavoriteRepositoy = class PrismaFavoriteRepositoy {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(data) {
        if (data.doctorId) {
            const existingFavorite = await this.prisma.favorites.findFirst({
                where: {
                    pacientId: data.pacientId,
                    doctorId: data.doctorId,
                },
            });
            if (existingFavorite) {
                throw new common_1.BadRequestException(errorsMessages_1.messages.favoriteAlreadyExist);
            }
        }
        else if (data.institutionId) {
            const existingFavorite = await this.prisma.favorites.findFirst({
                where: {
                    pacientId: data.pacientId,
                    institutionId: data.institutionId,
                },
            });
            if (existingFavorite) {
                throw new common_1.BadRequestException(errorsMessages_1.messages.favoriteAlreadyExist);
            }
        }
        return await this.prisma.favorites.create({ data });
    }
    async remove(data) {
        if (data.doctorId) {
            const result = await this.prisma.favorites.deleteMany({
                where: {
                    pacientId: data.pacientId,
                    doctorId: data.doctorId,
                },
            });
            if (result.count === 0) {
                return { message: errorsMessages_1.messages.doctorNotFound };
            }
            return { message: errorsMessages_1.messages.doctorRemovedFavorite };
        }
        else if (data.institutionId) {
            const result = await this.prisma.favorites.deleteMany({
                where: {
                    pacientId: data.pacientId,
                    institutionId: data.institutionId,
                },
            });
            if (result.count === 0) {
                return { message: errorsMessages_1.messages.clinicNotFound };
            }
            return { message: errorsMessages_1.messages.clinicRemovedFavorite };
        }
        else {
            return { message: 'Nenhum favorito removido.' };
        }
    }
    async findAll(id) {
        try {
            const allFavorites = await this.prisma.favorites.findMany({
                where: { pacientId: id },
                include: {
                    doctor: {
                        select: {
                            id: true,
                            specialty: true,
                            user: true,
                        },
                    },
                    institution: {
                        select: {
                            id: true,
                            user: true,
                        },
                    },
                },
            });
            const doctorData = allFavorites
                .filter((e) => e.doctor && e.doctor.user)
                .map((e) => ({
                id: e.doctor.id,
                name: e.doctor.user.name,
                city: e.doctor.user.city,
                municipality: e.doctor.user.municipality,
                specialty: e.doctor.specialty,
                avatar: e.doctor.user.avatar || null,
            }));
            const institutionData = allFavorites
                .filter((e) => e.institution && e.institution.user)
                .map((e) => ({
                id: e.institution.id,
                name: e.institution.user.name,
                city: e.institution.user.city,
                municipality: e.institution.user.municipality,
                avatar: e.institution.user.avatar || null,
            }));
            const result = [
                {
                    doctors: doctorData,
                    institutions: institutionData,
                },
            ];
            return result;
        }
        catch (error) {
            throw new common_1.InternalServerErrorException(errorsMessages_1.messages.errorPatientFavorites);
        }
    }
    async findUser(id) {
        const user = await this.prisma.user.findUnique({
            where: {
                id: id,
            },
            select: {
                id: true,
                Patient: {
                    select: {
                        id: true,
                    },
                },
            },
        });
        const result = {
            pacient: user.Patient[0],
        };
        return result;
    }
};
exports.PrismaFavoriteRepositoy = PrismaFavoriteRepositoy;
exports.PrismaFavoriteRepositoy = PrismaFavoriteRepositoy = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [nestjs_prisma_1.PrismaService])
], PrismaFavoriteRepositoy);
//# sourceMappingURL=prisma-FavoritesRepository.js.map