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
exports.UploadavatarQueueService = void 0;
const common_1 = require("@nestjs/common");
const bull_1 = require("@nestjs/bull");
let UploadavatarQueueService = class UploadavatarQueueService {
    constructor(sendQueue) {
        this.sendQueue = sendQueue;
    }
    async SendAvatarQueue(file) {
        if (!file || !file.buffer) {
            throw new common_1.BadRequestException('File ou buffer indefinido');
        }
        this.sendQueue.add('send-avatar', file);
    }
};
exports.UploadavatarQueueService = UploadavatarQueueService;
exports.UploadavatarQueueService = UploadavatarQueueService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, bull_1.InjectQueue)('uploadJob')),
    __metadata("design:paramtypes", [Object])
], UploadavatarQueueService);
//# sourceMappingURL=upload-producer.js.map