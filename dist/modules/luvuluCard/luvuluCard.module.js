"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LuvuluCardModule = void 0;
const prisma_module_1 = require("../prisma/prisma.module");
const common_1 = require("@nestjs/common");
const auth_module_1 = require("../auth/auth.module");
const ILuvuluCardRepository_1 = require("./repository/interface/ILuvuluCardRepository");
const prismaLuvuluCardRepository_1 = require("./repository/implementations/prismaLuvuluCardRepository");
const create_luvulu_card_resolver_1 = require("./resolvers/create/create-luvulu-card.resolver");
const create_luvulu_card_service_1 = require("./usecases/create/create-luvulu-card.service");
const listaAll_luvulu_card__service_1 = require("./usecases/listAll/listaAll-luvulu-card..service");
const lista_one_luvulu_card_service_1 = require("./usecases/listOne/lista-one-luvulu-card.service");
const listAll_luvulu_card_resolver_1 = require("./resolvers/listAll/listAll-luvulu-card.resolver");
const listOne_luvulu_card_resolver_1 = require("./resolvers/listOne/listOne-luvulu-card.resolver");
const accept_status_luvulu_card_resolver_1 = require("./resolvers/acceptRequest/accept-status-luvulu-card.resolver");
const change_status_luvulu_card_service_1 = require("./usecases/changestatus/change-status-luvulu-card.service");
const change_status_luvulu_card_service_2 = require("./usecases/cancelRequest/change-status-luvulu-card.service");
const accept_status_luvulu_card_resolver_2 = require("./resolvers/cancelRequest/accept-status-luvulu-card.resolver");
const prismaNotificationRepository_1 = require("../notification/repository/implementations/prismaNotificationRepository");
const INotificaionRepository_1 = require("../notification/repository/interface/INotificaionRepository");
let LuvuluCardModule = class LuvuluCardModule {
};
exports.LuvuluCardModule = LuvuluCardModule;
exports.LuvuluCardModule = LuvuluCardModule = __decorate([
    (0, common_1.Module)({
        imports: [prisma_module_1.PrismaModule, auth_module_1.AuthModule],
        providers: [
            create_luvulu_card_resolver_1.CreateLuvuluCardResolver,
            listAll_luvulu_card_resolver_1.FindAllLuvuluCardResolver,
            listOne_luvulu_card_resolver_1.FindOneLuvuluCardResolver,
            accept_status_luvulu_card_resolver_2.AcceptLuvuluCardRequestResolver,
            accept_status_luvulu_card_resolver_1.CancelLuvuluCardRequestResolver,
            create_luvulu_card_service_1.CreateLuvuluCardService,
            lista_one_luvulu_card_service_1.ListOneLuvuluCardService,
            listaAll_luvulu_card__service_1.ListAllLuvuluCardService,
            change_status_luvulu_card_service_1.ChangeStatusLuvuluCardService,
            change_status_luvulu_card_service_2.CancelLuvuluCardRequestService,
            {
                provide: ILuvuluCardRepository_1.ILuvuluCardRepository,
                useClass: prismaLuvuluCardRepository_1.PrismaLuvulucardRepositoy,
            },
            {
                provide: INotificaionRepository_1.INotificationRepository,
                useClass: prismaNotificationRepository_1.PrismaNotificationsRepositoy,
            },
        ],
        exports: [],
    })
], LuvuluCardModule);
//# sourceMappingURL=luvuluCard.module.js.map