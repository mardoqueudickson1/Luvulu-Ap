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
exports.PrismaRatingRepositoy = void 0;
const common_1 = require("@nestjs/common");
const nestjs_prisma_1 = require("nestjs-prisma");
const errorsMessages_1 = require("../../../../utils/shared/errorsMessages");
let PrismaRatingRepositoy = class PrismaRatingRepositoy {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(data) {
        return this.prisma.rating.create({
            data: {
                appoitmentID: data.appoitmentID,
                userId: data.userId,
                doctorId: data.doctorId,
                rate: data.rate,
                comment: data.comment,
            },
        });
    }
    async update(id, data) {
        return this.prisma.rating.update({
            where: { id: id },
            data: data,
        });
    }
    async findById(id) {
        return await this.prisma.rating.findUnique({ where: { id: id } });
    }
    async findUserRatingForDoctor(userId, doctorId) {
        return await this.prisma.rating.findFirst({
            where: {
                userId: userId,
                doctorId: doctorId,
            },
        });
    }
    async remove({ id }) {
        await this.prisma.rating.delete({ where: { id: id } });
    }
    async findAll() {
        return await this.prisma.rating.findMany();
    }
    async findTopRatedDoctors() {
        try {
            const topRated = await this.prisma.doctor.findMany({
                include: {
                    rating: {
                        select: {
                            id: true,
                            comment: true,
                            doctorId: true,
                            userId: true,
                            rate: true,
                        },
                    },
                    institution: {
                        include: {
                            institution: {
                                select: {
                                    id: true,
                                    user: true,
                                },
                            },
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
                            avatar: true,
                            nif: true,
                            FatherName: true,
                            MotherName: true,
                            type: true,
                            municipality: true,
                            addressComplement: true,
                        },
                    },
                },
            });
            const response = topRated.map((doctor) => {
                const institutionArray = doctor.institution.map((e) => ({
                    id: e.institution.id,
                    name: e.institution.user.name,
                    city: e.institution.user.city,
                    municipality: doctor.user.municipality,
                    neigbhod: doctor.user.neigbhod,
                }));
                return {
                    specialty: doctor.specialty,
                    bio: doctor.bio,
                    registrationNumber: doctor.registrationNumber,
                    rating: doctor.rating,
                    user: {
                        id: doctor.id,
                        name: doctor.user.name,
                        email: doctor.user.email,
                        nationality: doctor.user.nationality,
                        Role: doctor.user.Role,
                        avatar: doctor.user.avatar,
                        phone: doctor.user.phone,
                        birthday: doctor.user.birthday,
                        gender: doctor.user.gender,
                        neigbhod: doctor.user.neigbhod,
                        city: doctor.user.city,
                        nif: doctor.user.nif,
                        FatherName: doctor.user.FatherName,
                        MotherName: doctor.user.MotherName,
                        municipality: doctor.user.municipality,
                        addressComplement: doctor.user.addressComplement,
                    },
                    institutions: institutionArray,
                };
            });
            return response;
        }
        catch (error) { }
    }
    async findOneDoctorWithRate(data) {
        try {
            const doctorInfo = await this.prisma.doctor.findUnique({
                where: {
                    id: data,
                },
                select: {
                    id: true,
                    specialty: true,
                    institutionId: true,
                    registrationNumber: true,
                    bio: true,
                    Favorites: {
                        where: {
                            doctorId: data,
                        },
                    },
                    rating: {
                        select: {
                            id: true,
                            comment: true,
                            doctorId: true,
                            userId: true,
                            rate: true,
                            user: true,
                        },
                    },
                    Consultation: {
                        select: {
                            status: true,
                        },
                    },
                    institution: {
                        include: {
                            institution: {
                                select: {
                                    id: true,
                                    user: true,
                                },
                            },
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
                            avatar: true,
                            BI: true,
                            neigbhod: true,
                            city: true,
                            nif: true,
                            FatherName: true,
                            MotherName: true,
                            type: true,
                            municipality: true,
                            addressComplement: true,
                            createdAt: true,
                            updatedAt: true,
                            deletedAt: true,
                        },
                    },
                },
            });
            const isFavorited = doctorInfo.Favorites.length > 0;
            const institutionData = doctorInfo.institution
                .filter((e) => e.institution && e.institution.user)
                .map((e) => ({
                id: e.institution.id,
                name: e.institution.user.name,
                city: e.institution.user.city,
                municipality: e.institution.user.municipality,
            }));
            let closedConsultationsCount = 0;
            closedConsultationsCount = doctorInfo.Consultation.filter((consultation) => consultation.status === 'FINESHED').length;
            const responseDoctor = {
                pacientCared: closedConsultationsCount,
                id: doctorInfo.id,
                isFavorited: isFavorited,
                specialty: doctorInfo.specialty,
                institutionId: doctorInfo.institutionId,
                registrationNumber: doctorInfo.registrationNumber,
                bio: doctorInfo.bio,
                rating: doctorInfo.rating.map((e) => ({
                    user: e.user,
                    comment: e.comment,
                    doctorId: e.doctorId,
                    userId: e.user,
                    rate: e.rate,
                })),
                institutions: institutionData,
                user: {
                    id: doctorInfo.id,
                    name: doctorInfo.user.name,
                    avatar: doctorInfo.user.avatar,
                    email: doctorInfo.user.email,
                    nationality: doctorInfo.user.nationality,
                    Role: doctorInfo.user.Role,
                    phone: doctorInfo.user.phone,
                    gender: doctorInfo.user.gender,
                    neigbhod: doctorInfo.user.neigbhod,
                    city: doctorInfo.user.city,
                    nif: doctorInfo.user.nif,
                    municipality: doctorInfo.user.municipality,
                    addressComplement: doctorInfo.user.addressComplement,
                },
            };
            return responseDoctor;
        }
        catch (error) {
            throw new common_1.InternalServerErrorException(errorsMessages_1.messages.errorServer);
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
exports.PrismaRatingRepositoy = PrismaRatingRepositoy;
exports.PrismaRatingRepositoy = PrismaRatingRepositoy = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [nestjs_prisma_1.PrismaService])
], PrismaRatingRepositoy);
//# sourceMappingURL=prisma-DoctorRatingRepository.js.map