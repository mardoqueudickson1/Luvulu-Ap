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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UploadFileResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_upload_ts_1 = require("graphql-upload-ts");
const Cloudinary_service_1 = require("../../usecases/upload-avatar/Cloudinary.service");
let UploadFileResolver = class UploadFileResolver {
    constructor(cloudinary) {
        this.cloudinary = cloudinary;
    }
    async uploadAvatar(file) {
        try {
            console.log('arquivos', file);
            const data = await this.cloudinary.uploadImage(file);
            console.log('dados salvos', data);
            return data.secure_url;
        }
        catch (err) {
            throw new Error(`Falha ao fazer o upload do avatar: ${err.message}`);
        }
    }
};
exports.UploadFileResolver = UploadFileResolver;
__decorate([
    (0, graphql_1.Mutation)(() => String),
    __param(0, (0, graphql_1.Args)('avatar', { type: () => graphql_upload_ts_1.GraphQLUpload })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UploadFileResolver.prototype, "uploadAvatar", null);
exports.UploadFileResolver = UploadFileResolver = __decorate([
    (0, graphql_1.Resolver)(),
    __metadata("design:paramtypes", [typeof (_a = typeof Cloudinary_service_1.CloudinaryService !== "undefined" && Cloudinary_service_1.CloudinaryService) === "function" ? _a : Object])
], UploadFileResolver);
//# sourceMappingURL=upload.js.map