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
exports.CreateClinicService = void 0;
const IClinicRepository_1 = require("../../repository/interface/IClinicRepository");
const IUserRepository_1 = require("../../../user/repository/interface/IUserRepository");
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
const emailValidator_1 = require("../../../../utils/shared/emailValidator");
const errorsMessages_1 = require("../../../../utils/shared/errorsMessages");
const utils_1 = require("../../../../utils/utils");
const formatNumber_1 = require("../../../../utils/shared/formatNumber");
const readHtml_1 = require("../../../../utils/shared/readHtml");
const emailService_1 = require("../../../../utils/services/emailService");
let CreateClinicService = class CreateClinicService {
    constructor(clinicRepo, userRepo, emailService) {
        this.clinicRepo = clinicRepo;
        this.userRepo = userRepo;
        this.emailService = emailService;
    }
    async create(createClinicDTO) {
        try {
            if (!(0, emailValidator_1.EmailValidator)(createClinicDTO.email)) {
                throw new common_1.BadRequestException(errorsMessages_1.messages.invalidEmail);
            }
            const existingClinic = await this.clinicRepo.findByEmail(createClinicDTO.email);
            if (existingClinic) {
                throw new common_1.BadRequestException(errorsMessages_1.messages.clinicAlreadyExist);
            }
            const formattedPhoneNumber = (0, formatNumber_1.formatPhoneNumber)(createClinicDTO.phone);
            const nameUpperCase = createClinicDTO.name.toUpperCase();
            const municipalityUpperCase = createClinicDTO.municipality.toUpperCase();
            const cityUpperCase = createClinicDTO.city.toUpperCase();
            const neigbhodUpperCase = createClinicDTO.neigbhod.toUpperCase();
            const user = await this.userRepo.create({
                name: nameUpperCase,
                email: createClinicDTO.email,
                phone: createClinicDTO.phone,
                Role: client_1.RoleType.CLINIC,
                gender: createClinicDTO.gender,
                password: await (0, utils_1.generateHash)(createClinicDTO.password),
                BI: createClinicDTO.BI,
                birthday: createClinicDTO.birthday,
                nif: createClinicDTO.nif,
                nationality: createClinicDTO.nationality,
                city: cityUpperCase,
                municipality: municipalityUpperCase,
                neigbhod: neigbhodUpperCase,
                addressComplement: createClinicDTO.addressComplement,
                type: createClinicDTO.type,
                avatar: process.env.DEAFUL_AVATAR_NAME,
            });
            const latitudeString = createClinicDTO.clinicLatitude.toString();
            const longitudeString = createClinicDTO.cliniclongitude.toString();
            const clinic = await this.clinicRepo.create({
                userId: user.id,
                clinicLatitude: latitudeString,
                cliniclongitude: longitudeString,
            });
            const name = user.name;
            const email = user.email;
            const html = await (0, readHtml_1.readHTMLFile)(`./dist/assets/html/welcome.html`, {
                name,
                email,
            });
            await this.emailService.execute({
                to: user.email ?? '',
                html,
                subject: 'Bem-vindo à Luvulu',
            });
            const msg = `
        Olá ${user.name}!

        Bem-vindo à Luvulu, a sua solução completa para cuidados de saúde personalizados.

        Seu cadastro foi realizado com sucesso com o email ${user.email} e o número ${formattedPhoneNumber}.

        A partir de agora, você pode:

        Agendar consultas: Marque consultas com médicos de confiança em minutos.
        Gerenciar sua saúde: Acompanhe seu histórico de consultas, exames e receitas médicas.
        Conectar com médicos especializados: Encontre especialistas em sua área de preocupação.
        eReceber atendimento de qualidade: Receba atendimento médico de qualidade no conforto de sua casa.

        Obrigado por escolher o Luvulo. Estamos ansiosos para acompanhá-lo em sua jornada de saúde.

        Atenciosamente,
        O Team Luvulu `;
            return clinic;
        }
        catch (error) {
            throw error;
        }
    }
};
exports.CreateClinicService = CreateClinicService;
exports.CreateClinicService = CreateClinicService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [IClinicRepository_1.IClinicRepository,
        IUserRepository_1.IUserRepository,
        emailService_1.SendMailService])
], CreateClinicService);
//# sourceMappingURL=create-clinic.service.js.map