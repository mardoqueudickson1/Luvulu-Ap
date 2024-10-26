"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClinicRatingModule = void 0;
const common_1 = require("@nestjs/common");
const nestjs_prisma_1 = require("nestjs-prisma");
const auth_module_1 = require("../auth/auth.module");
const prisma_ClinicRatingRepository_1 = require("./repository/implementations/prisma-ClinicRatingRepository");
const IClinicRatingRepository_1 = require("./repository/interface/IClinicRatingRepository");
const create_clinic_rating_resolver_1 = require("./resolvers/create/create-clinic-rating.resolver");
const find_all_rating_resolver_1 = require("./resolvers/find-all/find-all-rating.resolver");
const find_one_rated_resolver_1 = require("./resolvers/find-one-rated/find-one-rated.resolver");
const find_one_rating_resolver_1 = require("./resolvers/find-one/find-one-rating.resolver");
const remove_rating_resolver_1 = require("./resolvers/remove/remove-rating.resolver");
const update_rating_resolver_1 = require("./resolvers/update/update-rating.resolver");
const create_rating_service_1 = require("./usecases/create/create-rating.service");
const find_one_rated_service_1 = require("./usecases/find-one-rated/find-one-rated.service");
const find_onde_rating_service_1 = require("./usecases/find-one/find-onde-rating.service");
const list_all_rating_service_1 = require("./usecases/list-all/list-all-rating.service");
const remove_rating_service_1 = require("./usecases/remove/remove-rating.service");
const update_rating_service_1 = require("./usecases/update/update-rating.service");
const find_all_rating_resolver_2 = require("./resolvers/list-all-top-rated/find-all-rating.resolver");
const list_all_top_rated_service_1 = require("./usecases/list-all -top-rated/list-all-top-rated.service");
let ClinicRatingModule = class ClinicRatingModule {
};
exports.ClinicRatingModule = ClinicRatingModule;
exports.ClinicRatingModule = ClinicRatingModule = __decorate([
    (0, common_1.Module)({
        imports: [nestjs_prisma_1.PrismaModule, auth_module_1.AuthModule],
        providers: [
            create_clinic_rating_resolver_1.CreateClinicRatingResolver,
            find_all_rating_resolver_1.FindAllClinicRatingResolver,
            find_one_rating_resolver_1.FindOneClinicRatingResolver,
            remove_rating_resolver_1.RemoveClinicRatingResolver,
            update_rating_resolver_1.UpdateClinicRatingResolver,
            find_all_rating_resolver_2.FindAllTopClinicRatedResolver,
            find_one_rated_resolver_1.FindOneClinicRatedResolver,
            create_rating_service_1.CreateClinicRatingService,
            find_onde_rating_service_1.FindOneClinicRatingService,
            list_all_rating_service_1.ListAllClinicRatingService,
            remove_rating_service_1.RemoveClinicRatingService,
            update_rating_service_1.UpdateClinicRatingService,
            list_all_top_rated_service_1.ListAllTopClinicRatingService,
            find_one_rated_service_1.FindOneClinicRatedService,
            {
                provide: IClinicRatingRepository_1.IClinicRatingRepository,
                useClass: prisma_ClinicRatingRepository_1.PrismaClinicRatingRepositoy,
            },
        ],
        exports: [],
    })
], ClinicRatingModule);
//# sourceMappingURL=clinic-rating.module.js.map