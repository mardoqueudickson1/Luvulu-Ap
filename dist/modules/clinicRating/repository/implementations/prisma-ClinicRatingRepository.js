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
exports.PrismaClinicRatingRepositoy = void 0;
const common_1 = require("@nestjs/common");
const nestjs_prisma_1 = require("nestjs-prisma");
const errorsMessages_1 = require("../../../../utils/shared/errorsMessages");
let PrismaClinicRatingRepositoy = class PrismaClinicRatingRepositoy {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(data) {
        return this.prisma.clinicRating.create({
            data: {
                userId: data.userId,
                clinicId: data.clinicId,
                rate: data.rate,
                comment: data.comment,
            },
        });
    }
    async update(id, data) {
        return this.prisma.clinicRating.update({
            where: { id: id },
            data: data,
        });
    }
    async findById(id) {
        return await this.prisma.clinicRating.findUnique({ where: { id: id } });
    }
    async findUserRatingForClinic(userId, clinicId) {
        return await this.prisma.clinicRating.findFirst({
            where: {
                userId: userId,
                clinicId: clinicId,
            },
        });
    }
    async remove({ id }) {
        await this.prisma.rating.delete({ where: { id: id } });
    }
    async findAll() {
        return await this.prisma.clinicRating.findMany();
    }
    async findTopRatedClinic() {
        try {
            const topRated = await this.prisma.institution.findMany({
                include: {
                    service: {
                        select: {
                            name: true,
                            description: true,
                        },
                    },
                    Doctor: {
                        include: {
                            Doctor: {
                                select: {
                                    rating: {
                                        select: {
                                            rate: true,
                                        },
                                    },
                                },
                            },
                        },
                    },
                    ClinicRating: {
                        select: {
                            id: true,
                            comment: true,
                            clinicId: true,
                            userId: true,
                            rate: true,
                        },
                    },
                    user: {
                        select: {
                            id: true,
                            name: true,
                            email: true,
                            nationality: true,
                            Role: true,
                            phone: true,
                            birthday: true,
                            gender: true,
                            neigbhod: true,
                            city: true,
                            nif: true,
                            avatar: true,
                            FatherName: true,
                            MotherName: true,
                            type: true,
                            municipality: true,
                            addressComplement: true,
                        },
                    },
                },
            });
            const response = topRated.map((clinic) => {
                return {
                    doctorRated: clinic.Doctor.flatMap((e) => e.Doctor.rating.map((r) => r.rate)),
                    user: {
                        id: clinic.id,
                        name: clinic.user.name,
                        email: clinic.user.email,
                        nationality: clinic.user.nationality,
                        Role: clinic.user.Role,
                        phone: clinic.user.phone,
                        birthday: clinic.user.birthday,
                        gender: clinic.user.gender,
                        neigbhod: clinic.user.neigbhod,
                        city: clinic.user.city,
                        nif: clinic.user.nif,
                        avatar: clinic.user.avatar,
                        FatherName: clinic.user.FatherName,
                        MotherName: clinic.user.MotherName,
                        municipality: clinic.user.municipality,
                        addressComplement: clinic.user.addressComplement,
                    },
                };
            });
            return response;
        }
        catch (error) {
            throw new common_1.InternalServerErrorException(errorsMessages_1.messages.errorServer);
        }
    }
    async findOneClinicWithRate(id) {
        try {
            const clinicInfo = await this.prisma.institution.findUnique({
                where: {
                    id: id,
                },
                select: {
                    id: true,
                    ClinicRating: {
                        select: {
                            id: true,
                            comment: true,
                            clinicId: true,
                            userId: true,
                            rate: true,
                        },
                    },
                    Doctor: {
                        include: {
                            Doctor: {
                                select: {
                                    rating: {
                                        select: {
                                            rate: true,
                                        },
                                    },
                                },
                            },
                        },
                    },
                    Favorites: {
                        where: {
                            institutionId: id,
                        },
                    },
                    Consultation: {
                        select: {
                            status: true,
                        },
                    },
                    user: {
                        select: {
                            id: true,
                            name: true,
                            email: true,
                            nationality: true,
                            Role: true,
                            phone: true,
                            birthday: true,
                            gender: true,
                            BI: true,
                            neigbhod: true,
                            city: true,
                            nif: true,
                            FatherName: true,
                            MotherName: true,
                            municipality: true,
                            addressComplement: true,
                            avatar: true,
                        },
                    },
                },
            });
            let closedConsultationsCount = 0;
            closedConsultationsCount = clinicInfo.Consultation.filter((consultation) => consultation.status === 'FINESHED').length;
            const isFavorited = clinicInfo.Favorites.length > 0;
            const responseClinic = {
                isFavorited: isFavorited,
                pacientsCared: closedConsultationsCount,
                doctorRated: clinicInfo.Doctor.flatMap((e) => e.Doctor.rating.map((r) => r.rate)),
                user: {
                    id: clinicInfo.id,
                    name: clinicInfo.user.name,
                    email: clinicInfo.user.email,
                    nationality: clinicInfo.user.nationality,
                    Role: clinicInfo.user.Role,
                    phone: clinicInfo.user.phone,
                    neigbhod: clinicInfo.user.neigbhod,
                    city: clinicInfo.user.city,
                    nif: clinicInfo.user.nif,
                    municipality: clinicInfo.user.municipality,
                    addressComplement: clinicInfo.user.addressComplement || null,
                    avatar: clinicInfo.user.avatar || null,
                },
            };
            return responseClinic;
        }
        catch (error) {
            throw new common_1.InternalServerErrorException(errorsMessages_1.messages.errorServer);
        }
    }
};
exports.PrismaClinicRatingRepositoy = PrismaClinicRatingRepositoy;
exports.PrismaClinicRatingRepositoy = PrismaClinicRatingRepositoy = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [nestjs_prisma_1.PrismaService])
], PrismaClinicRatingRepositoy);
//# sourceMappingURL=prisma-ClinicRatingRepository.js.map