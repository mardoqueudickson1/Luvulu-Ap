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
exports.SuperBaseService = void 0;
const common_1 = require("@nestjs/common");
const path_1 = require("path");
const IUploadRepository_1 = require("../../repository/interface/IUploadRepository");
const supaBaseConfig_1 = require("../../../../utils/shared/providers/storageProviders/implementations/supaBase/supaBaseConfig");
let SuperBaseService = class SuperBaseService {
    constructor(userRepo) {
        this.userRepo = userRepo;
        this.supabaseClient = (0, supaBaseConfig_1.createSupabaseClient)();
    }
    async saveFile(file, userId) {
        try {
            const superBaseBucket = process.env.SUPERBASE_BUCKET_NAME;
            if (!file || !file.createReadStream) {
                throw new common_1.BadRequestException('File or createReadStream is undefined');
            }
            const { createReadStream, filename } = await file;
            const stream = createReadStream();
            let buffer = Buffer.from('');
            stream.on('data', (chunk) => {
                buffer = Buffer.concat([buffer, chunk]);
            });
            await new Promise((resolve, reject) => {
                stream.on('end', resolve);
                stream.on('error', reject);
            });
            const modifiedFilename = NewFileName(filename);
            const { data, error } = await this.supabaseClient.storage
                .from(superBaseBucket)
                .upload(modifiedFilename, buffer, { upsert: true });
            await this.userRepo.update(userId, modifiedFilename);
            if (error) {
                throw new common_1.BadRequestException(`Falha ao fazer upload do Avatar: ${error.message}`);
            }
            return { message: 'Avatar adicionado com sucesso' };
        }
        catch (error) {
            throw new common_1.BadRequestException(`Erro ao fazer upload do arquivo: ${error.message}`);
        }
    }
};
exports.SuperBaseService = SuperBaseService;
exports.SuperBaseService = SuperBaseService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [IUploadRepository_1.IUploadRepository])
], SuperBaseService);
function NewFileName(originalname) {
    const ext = (0, path_1.extname)(originalname);
    const modifiedFilename = `${Date.now()}_${RandomNumber()}${ext}`;
    return modifiedFilename;
}
function RandomNumber() {
    return Math.floor(Math.random() * 10000 + 10000);
}
//# sourceMappingURL=upload-user-avatar.service.js.map