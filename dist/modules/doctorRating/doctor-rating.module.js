"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DoctorRatingModule = void 0;
const common_1 = require("@nestjs/common");
const prisma_DoctorRatingRepository_1 = require("./repository/implementations/prisma-DoctorRatingRepository");
const IDoctorRatingRepository_1 = require("./repository/interface/IDoctorRatingRepository");
const create_rating_resolver_1 = require("./resolvers/create/create-rating.resolver");
const find_all_rating_resolver_1 = require("./resolvers/find-all/find-all-rating.resolver");
const find_one_rating_resolver_1 = require("./resolvers/find-one/find-one-rating.resolver");
const remove_rating_resolver_1 = require("./resolvers/remove/remove-rating.resolver");
const update_rating_resolver_1 = require("./resolvers/update/update-rating.resolver");
const create_rating_service_1 = require("./usecases/create/create-rating.service");
const find_onde_rating_service_1 = require("./usecases/find-one/find-onde-rating.service");
const list_all_rating_service_1 = require("./usecases/list-all/list-all-rating.service");
const remove_rating_service_1 = require("./usecases/remove/remove-rating.service");
const update_rating_service_1 = require("./usecases/update/update-rating.service");
const find_all_rating_resolver_2 = require("./resolvers/list-all-top-rated/find-all-rating.resolver");
const list_all_top_rated_service_1 = require("./usecases/list-all -top-rated/list-all-top-rated.service");
const find_one_rated_resolver_1 = require("./resolvers/find-one-rated/find-one-rated.resolver");
const find_one_rated_service_1 = require("./usecases/find-one-rated/find-one-rated.service");
const nestjs_prisma_1 = require("nestjs-prisma");
const auth_module_1 = require("../auth/auth.module");
let DoctorRatingModule = class DoctorRatingModule {
};
exports.DoctorRatingModule = DoctorRatingModule;
exports.DoctorRatingModule = DoctorRatingModule = __decorate([
    (0, common_1.Module)({
        imports: [nestjs_prisma_1.PrismaModule, auth_module_1.AuthModule],
        providers: [
            create_rating_resolver_1.CreateRatingResolver,
            find_all_rating_resolver_1.FindAllRatingResolver,
            find_one_rating_resolver_1.FindOneRatingResolver,
            remove_rating_resolver_1.RemoveRatingResolver,
            update_rating_resolver_1.UpdateRatingResolver,
            find_all_rating_resolver_2.FindAllTopRatedngResolver,
            find_one_rated_resolver_1.FindOneRatedResolver,
            create_rating_service_1.CreateRatingService,
            find_onde_rating_service_1.FindOneRatingService,
            list_all_rating_service_1.ListAllRatingService,
            remove_rating_service_1.RemoveRatingService,
            update_rating_service_1.UpdateRatingService,
            list_all_top_rated_service_1.ListAllTopRatingService,
            find_one_rated_service_1.FindOneRatedService,
            {
                provide: IDoctorRatingRepository_1.IRatingRepository,
                useClass: prisma_DoctorRatingRepository_1.PrismaRatingRepositoy,
            },
        ],
        exports: [],
    })
], DoctorRatingModule);
//# sourceMappingURL=doctor-rating.module.js.map