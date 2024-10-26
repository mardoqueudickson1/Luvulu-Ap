"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QrCodeModule = void 0;
const common_1 = require("@nestjs/common");
const create_qr_code_service_1 = require("./usecases/create/create-qr-code.service");
const prisma_QRCodeRepository_1 = require("./repository/implementations/prisma-QRCodeRepository");
const IQRCodeRepository_1 = require("./repository/interface/IQRCodeRepository");
const create_qr_code_resolver_1 = require("./resolver/create/create-qr-code.resolver");
const auth_module_1 = require("../auth/auth.module");
const user_module_1 = require("../user/user.module");
const prismaUserRepository_1 = require("../user/repository/implementations/prismaUserRepository");
const IUserRepository_1 = require("../user/repository/interface/IUserRepository");
const prisma_module_1 = require("../prisma/prisma.module");
const patient_module_1 = require("../patient/patient.module");
const prismaPatitientRepository_1 = require("../patient/repository/implementations/prismaPatitientRepository");
const IPatientRepository_1 = require("../patient/repository/interface/IPatientRepository");
let QrCodeModule = class QrCodeModule {
};
exports.QrCodeModule = QrCodeModule;
exports.QrCodeModule = QrCodeModule = __decorate([
    (0, common_1.Module)({
        imports: [prisma_module_1.PrismaModule, auth_module_1.AuthModule, user_module_1.UserModule, patient_module_1.PatientModule],
        providers: [
            create_qr_code_resolver_1.CreateQrCodeResolver,
            create_qr_code_service_1.CreateQrCodeService,
            {
                provide: IQRCodeRepository_1.IQRCodeRepository,
                useClass: prisma_QRCodeRepository_1.PrismaQRCodeRepository,
            },
            {
                provide: IUserRepository_1.IUserRepository,
                useClass: prismaUserRepository_1.PrismaUserRepositoy,
            },
            {
                provide: IPatientRepository_1.IPatientRepository,
                useClass: prismaPatitientRepository_1.PrismaPatitientRepositoy,
            },
        ],
        exports: [
            create_qr_code_service_1.CreateQrCodeService,
            {
                provide: IQRCodeRepository_1.IQRCodeRepository,
                useClass: prisma_QRCodeRepository_1.PrismaQRCodeRepository,
            },
        ],
    })
], QrCodeModule);
//# sourceMappingURL=qr-code.module.js.map