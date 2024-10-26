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
exports.UploadAvatarConsumer = void 0;
const bull_1 = require("@nestjs/bull");
const path_1 = require("path");
let UploadAvatarConsumer = class UploadAvatarConsumer {
    async SendavatarJob(job) {
        const { data } = job;
        console.log('DATA:', data);
        const superBaseBucket = process.env.SUPERBASE_BUCKET_NAME;
        return {};
    }
};
exports.UploadAvatarConsumer = UploadAvatarConsumer;
__decorate([
    (0, bull_1.Process)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UploadAvatarConsumer.prototype, "SendavatarJob", null);
exports.UploadAvatarConsumer = UploadAvatarConsumer = __decorate([
    (0, bull_1.Processor)('uploadJob')
], UploadAvatarConsumer);
function NewFileName(originalname) {
    const ext = (0, path_1.extname)(originalname);
    const modifiedFilename = `${Date.now()}_${RandomNumber()}${ext}`;
    return modifiedFilename;
}
function RandomNumber() {
    return Math.floor(Math.random() * 10000 + 10000);
}
//# sourceMappingURL=upload-costumer.js.map