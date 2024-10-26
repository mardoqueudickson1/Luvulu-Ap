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
exports.CreateFCMService = void 0;
const common_1 = require("@nestjs/common");
const IFCMRepository_1 = require("../../repository/interface/IFCMRepository");
const IUserRepository_1 = require("../../../user/repository/interface/IUserRepository");
let CreateFCMService = class CreateFCMService {
    constructor(repo, userRepo) {
        this.repo = repo;
        this.userRepo = userRepo;
    }
    async create(data) {
        return await this.repo.create(data);
    }
};
exports.CreateFCMService = CreateFCMService;
exports.CreateFCMService = CreateFCMService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [IFCMRepository_1.IFCMRepository,
        IUserRepository_1.IUserRepository])
], CreateFCMService);
//# sourceMappingURL=create.service.js.map