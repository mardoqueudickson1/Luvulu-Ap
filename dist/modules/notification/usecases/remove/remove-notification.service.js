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
exports.RemoveNotificationService = void 0;
const common_1 = require("@nestjs/common");
const INotificaionRepository_1 = require("../../repository/interface/INotificaionRepository");
const errorsMessages_1 = require("../../../../utils/shared/errorsMessages");
let RemoveNotificationService = class RemoveNotificationService {
    constructor(notificationRepo) {
        this.notificationRepo = notificationRepo;
    }
    async remove(id) {
        try {
            const notification = await this.notificationRepo.findById(id);
            if (!notification) {
                throw new common_1.NotFoundException(errorsMessages_1.messages.notificationNotFound);
            }
            return await this.notificationRepo.remove({ id });
        }
        catch (error) {
            throw error;
        }
    }
};
exports.RemoveNotificationService = RemoveNotificationService;
exports.RemoveNotificationService = RemoveNotificationService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [INotificaionRepository_1.INotificationRepository])
], RemoveNotificationService);
//# sourceMappingURL=remove-notification.service.js.map