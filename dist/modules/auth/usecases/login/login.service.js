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
exports.LoginService = void 0;
const IUserRepository_1 = require("../../../user/repository/interface/IUserRepository");
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const bcrypt = require("bcrypt");
const errorsMessages_1 = require("../../../../utils/shared/errorsMessages");
const IFCMRepository_1 = require("../../../push-notification/repository/interface/IFCMRepository");
const findPhotoFile_1 = require("../../../../utils/shared/providers/storageProviders/implementations/supaBase/findPhotoFile");
let LoginService = class LoginService {
    constructor(jwtService, userRepo, fcmRepo) {
        this.jwtService = jwtService;
        this.userRepo = userRepo;
        this.fcmRepo = fcmRepo;
    }
    async validateUser(data) {
        const user = await this.userRepo.findByEmail(data.email);
        if (!user) {
            throw new common_1.UnauthorizedException(errorsMessages_1.messages.Unauthenticated);
        }
        if (user.avatar !== null) {
            const url = await findPhotoFile_1.findSupabaseFileService.getPhotoUrl(user.avatar);
            user.avatar = url.toString();
        }
        const cmfToken = {
            userId: user.userId,
            token: data.fcmToken,
        };
        const isPasswordValid = bcrypt.compareSync(data.password, user.password);
        if (!isPasswordValid) {
            throw new common_1.UnauthorizedException(errorsMessages_1.messages.Unauthenticated);
        }
        const { token, expiresIn } = await this.jwtToken(user);
        const { id, fcmToken } = await this.fcmRepo.findById(user.userId);
        if (fcmToken.length > 0) {
            const fcmTokenUpdate = {
                id: id[0],
                token: data.fcmToken,
                userId: user.id,
            };
            await this.fcmRepo.update(fcmTokenUpdate);
        }
        else if (fcmToken.length === 0) {
            await this.fcmRepo.create(cmfToken);
        }
        return {
            user: user,
            token,
            expiresIn,
        };
    }
    async jwtToken(user) {
        const payload = { username: user.name, sub: user.userId };
        const expiresIn = 60 * 60 * 24 * 7;
        const token = await this.jwtService.signAsync(payload, { expiresIn });
        return {
            token,
            expiresIn,
        };
    }
};
exports.LoginService = LoginService;
exports.LoginService = LoginService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [jwt_1.JwtService,
        IUserRepository_1.IUserRepository,
        IFCMRepository_1.IFCMRepository])
], LoginService);
//# sourceMappingURL=login.service.js.map