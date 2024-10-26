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
exports.ListAllNotificationByClinicIdService = void 0;
const errorsMessages_1 = require("../../../../utils/shared/errorsMessages");
const INotificaionRepository_1 = require("../../repository/interface/INotificaionRepository");
const common_1 = require("@nestjs/common");
const findPhotoFile_1 = require("../../../../utils/shared/providers/storageProviders/implementations/supaBase/findPhotoFile");
let ListAllNotificationByClinicIdService = class ListAllNotificationByClinicIdService {
    constructor(notificationRepo) {
        this.notificationRepo = notificationRepo;
    }
    async listAll(clinicId) {
        const notification = await this.notificationRepo.findAllNotificationClinicId(clinicId);
        if (!notification) {
            throw new common_1.NotFoundException(errorsMessages_1.messages.notificationNotFound);
        }
        for (const data of notification) {
            if (data.avatar !== null) {
                const url = await findPhotoFile_1.findSupabaseFileService.getPhotoUrl(data.avatar);
                data.avatar = url.toString();
            }
        }
        return notification;
    }
};
exports.ListAllNotificationByClinicIdService = ListAllNotificationByClinicIdService;
exports.ListAllNotificationByClinicIdService = ListAllNotificationByClinicIdService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [INotificaionRepository_1.INotificationRepository])
], ListAllNotificationByClinicIdService);
//# sourceMappingURL=getAll-notification-clinicId.service.js.map