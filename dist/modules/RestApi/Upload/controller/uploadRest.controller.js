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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UploadRestController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const current_user_decorator_1 = require("../../../auth/decorator/current-user.decorator");
const upload_rest_service_1 = require("../service/upload-rest.service");
const jwt_auth_guard_1 = require("../../../auth/guards/jwt-auth.guard");
let UploadRestController = class UploadRestController {
    constructor(repo) {
        this.repo = repo;
    }
    async uploadFile(file, user) {
        return await this.repo.saveFile(file, user.userID);
    }
};
exports.UploadRestController = UploadRestController;
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.GqlAuthGuard),
    (0, common_1.Post)('upload'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file')),
    __param(0, (0, common_1.UploadedFile)()),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], UploadRestController.prototype, "uploadFile", null);
exports.UploadRestController = UploadRestController = __decorate([
    (0, common_1.Controller)('luvulu'),
    __metadata("design:paramtypes", [upload_rest_service_1.RestSuperBaseService])
], UploadRestController);
//# sourceMappingURL=uploadRest.controller.js.map