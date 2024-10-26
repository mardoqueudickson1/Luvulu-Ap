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
exports.ChangeStatusLuvuluCardService = void 0;
const common_1 = require("@nestjs/common");
const ILuvuluCardRepository_1 = require("../../repository/interface/ILuvuluCardRepository");
const INotificaionRepository_1 = require("../../../notification/repository/interface/INotificaionRepository");
const client_1 = require("@prisma/client");
const sendPushNotification_1 = require("../../../../utils/sendPushNotification");
let ChangeStatusLuvuluCardService = class ChangeStatusLuvuluCardService {
    constructor(repo, notificationRepo) {
        this.repo = repo;
        this.notificationRepo = notificationRepo;
    }
    async changeStatus(data) {
        const luvuluCard = await this.repo.update(data);
        const pacient = await this.repo.findAOne(data.patientId);
        const result = await this.notificationRepo.create({
            patient_id: pacient.pacientId,
            content: `Olá, ${pacient.name}, o seu cartão foi ativado com sucesso.`,
            type: client_1.TypeNotification.CARD_CHANGESTATUS,
            read: false,
        });
        if (pacient.token !== null) {
            const pushInput = {
                title: 'Luvulu',
                message: result.content,
                token: pacient.token,
            };
            await (0, sendPushNotification_1.SendPushNotification)(pushInput);
        }
        return luvuluCard;
    }
};
exports.ChangeStatusLuvuluCardService = ChangeStatusLuvuluCardService;
exports.ChangeStatusLuvuluCardService = ChangeStatusLuvuluCardService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [ILuvuluCardRepository_1.ILuvuluCardRepository,
        INotificaionRepository_1.INotificationRepository])
], ChangeStatusLuvuluCardService);
//# sourceMappingURL=change-status-luvulu-card.service.js.map