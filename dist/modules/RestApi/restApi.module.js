"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestApiModule = void 0;
const common_1 = require("@nestjs/common");
const uploadRest_controller_1 = require("./Upload/controller/uploadRest.controller");
const auth_module_1 = require("../auth/auth.module");
const user_module_1 = require("../user/user.module");
const upload_rest_service_1 = require("./Upload/service/upload-rest.service");
const prisma_module_1 = require("../prisma/prisma.module");
const prismaUploadRepository_1 = require("./Upload/repository/implementations/prismaUploadRepository");
const IUploadRepository_1 = require("./Upload/repository/interface/IUploadRepository");
let RestApiModule = class RestApiModule {
};
exports.RestApiModule = RestApiModule;
exports.RestApiModule = RestApiModule = __decorate([
    (0, common_1.Module)({
        imports: [prisma_module_1.PrismaModule, user_module_1.UserModule, auth_module_1.AuthModule],
        controllers: [uploadRest_controller_1.UploadRestController],
        providers: [
            uploadRest_controller_1.UploadRestController,
            upload_rest_service_1.RestSuperBaseService,
            {
                provide: IUploadRepository_1.IURestUploadRepository,
                useClass: prismaUploadRepository_1.PrismaUploadRepository,
            },
        ],
    })
], RestApiModule);
//# sourceMappingURL=restApi.module.js.map