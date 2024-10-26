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
exports.FileService = void 0;
const common_1 = require("@nestjs/common");
const aws_sdk_1 = require("aws-sdk");
const uuidv4_1 = require("uuidv4");
let FileService = class FileService {
    constructor() { }
    async uploadFile(imageBuffer, fileName) {
        const s3 = new aws_sdk_1.S3();
        const upload = await s3.upload({
            Bucket: process.env.S3_BUCKET_NAME,
            Body: imageBuffer,
            Key: `${(0, uuidv4_1.uuid)()}- ${fileName}`,
        });
        return upload;
    }
    async deleteFile(key) {
        const s3 = new aws_sdk_1.S3();
        return await s3
            .deleteObject({
            Bucket: process.env.BUCKET_NAME,
            Key: key,
        })
            .promise();
    }
};
exports.FileService = FileService;
exports.FileService = FileService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], FileService);
//# sourceMappingURL=file.service.js.map