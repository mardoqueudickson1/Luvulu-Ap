"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModule = void 0;
const prisma_module_1 = require("../prisma/prisma.module");
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const login_service_1 = require("./usecases/login/login.service");
const login_resolver_1 = require("./resolvers/login/login.resolver");
const jwt_strategy_service_1 = require("./jwt-strategy/jwt.strategy.service");
const prismaUserRepository_1 = require("../user/repository/implementations/prismaUserRepository");
const IUserRepository_1 = require("..//user/repository/interface/IUserRepository");
const priismaFCMRepository_1 = require("../push-notification/repository/implementations/priismaFCMRepository");
const IFCMRepository_1 = require("../push-notification/repository/interface/IFCMRepository");
let AuthModule = class AuthModule {
};
exports.AuthModule = AuthModule;
exports.AuthModule = AuthModule = __decorate([
    (0, common_1.Module)({
        imports: [
            prisma_module_1.PrismaModule,
            jwt_1.JwtModule.register({
                global: true,
                secret: process.env.JWT_SECRET,
                signOptions: {
                    expiresIn: '7d',
                },
            }),
        ],
        providers: [
            login_service_1.LoginService,
            login_resolver_1.LoginResolver,
            jwt_strategy_service_1.JwtStrategy,
            {
                provide: IUserRepository_1.IUserRepository,
                useClass: prismaUserRepository_1.PrismaUserRepositoy,
            },
            {
                provide: IFCMRepository_1.IFCMRepository,
                useClass: priismaFCMRepository_1.PrismaFCMRepository,
            },
        ],
        exports: [],
    })
], AuthModule);
//# sourceMappingURL=auth.module.js.map