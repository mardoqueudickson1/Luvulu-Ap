"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FavoritesModule = void 0;
const common_1 = require("@nestjs/common");
const remove_favorite_resolver_1 = require("./resolver/remove-favorite/remove-favorite.resolver");
const prisma_FavoritesRepository_1 = require("./repository/implementations/prisma-FavoritesRepository");
const IFavoriteRepository_1 = require("./repository/interface/IFavoriteRepository");
const prisma_module_1 = require("../prisma/prisma.module");
const auth_module_1 = require("../auth/auth.module");
const create_favorite_service_1 = require("./usecases/create-favorite/create-favorite.service");
const create_favorite_resolver_1 = require("./resolver/create-favorite/create-favorite.resolver");
const prismaDoctorRepository_1 = require("../doctor/repository/implementations/prismaDoctorRepository");
const IDoctorRepository_1 = require("../doctor/repository/interface/IDoctorRepository");
const doctor_module_1 = require("../doctor/doctor.module");
const find_all_favorite_service_1 = require("./usecases/find-all-favorite/find-all-favorite.service");
const find_all_favorite_resolver_1 = require("./resolver/find-all-favorites/find-all-favorite.resolver");
const remove_favorite_service_1 = require("./usecases/remove-favorite/remove-favorite.service");
let FavoritesModule = class FavoritesModule {
};
exports.FavoritesModule = FavoritesModule;
exports.FavoritesModule = FavoritesModule = __decorate([
    (0, common_1.Module)({
        imports: [prisma_module_1.PrismaModule, auth_module_1.AuthModule, doctor_module_1.DoctorModule],
        providers: [
            create_favorite_resolver_1.CreateFavoriteResolver,
            find_all_favorite_resolver_1.FindAllFavoriteResolver,
            remove_favorite_resolver_1.RemoveFavoriteResolver,
            create_favorite_service_1.CreateFavoriteService,
            find_all_favorite_service_1.FindAllFavoriteService,
            remove_favorite_service_1.RemoveFavoriteService,
            {
                provide: IFavoriteRepository_1.IFavoriteRepository,
                useClass: prisma_FavoritesRepository_1.PrismaFavoriteRepositoy,
            },
            {
                provide: IDoctorRepository_1.IDoctorRepository,
                useClass: prismaDoctorRepository_1.PrismaDoctorRepositoy,
            },
        ],
    })
], FavoritesModule);
//# sourceMappingURL=favorites.module.js.map