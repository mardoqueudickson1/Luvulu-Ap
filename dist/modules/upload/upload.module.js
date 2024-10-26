"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UploadModule = void 0;
const common_1 = require("@nestjs/common");
const upload_user_avatar_service_1 = require("./usecases/upload-avatar/upload-user-avatar.service");
const upload_resolver_1 = require("./resolvers/upload-avatars/upload.resolver");
const auth_module_1 = require("../auth/auth.module");
const user_module_1 = require("../user/user.module");
const IUploadRepository_1 = require("./repository/interface/IUploadRepository");
const prismaUploadRepository_1 = require("./repository/implementations/prismaUploadRepository");
const prismaUserRepository_1 = require("../user/repository/implementations/prismaUserRepository");
const IUserRepository_1 = require("../user/repository/interface/IUserRepository");
const prisma_module_1 = require("../prisma/prisma.module");
const find_resolver_1 = require("./resolvers/find/find.resolver");
const find_user_avatar_service_1 = require("./usecases/find/find-user-avatar.service");
let UploadModule = class UploadModule {
};
exports.UploadModule = UploadModule;
exports.UploadModule = UploadModule = __decorate([
    (0, common_1.Module)({
        imports: [prisma_module_1.PrismaModule, user_module_1.UserModule, auth_module_1.AuthModule],
        providers: [
            upload_user_avatar_service_1.SuperBaseService,
            find_user_avatar_service_1.FindFileService,
            upload_resolver_1.UploadFileResolver,
            find_resolver_1.FindResolverResolver,
            {
                provide: IUserRepository_1.IUserRepository,
                useClass: prismaUserRepository_1.PrismaUserRepositoy,
            },
            {
                provide: IUploadRepository_1.IUploadRepository,
                useClass: prismaUploadRepository_1.PrismaUploadRepositoy,
            },
        ],
        exports: [],
    })
], UploadModule);
//# sourceMappingURL=upload.module.js.map