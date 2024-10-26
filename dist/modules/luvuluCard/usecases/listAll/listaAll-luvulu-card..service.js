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
exports.ListAllLuvuluCardService = void 0;
const common_1 = require("@nestjs/common");
const ILuvuluCardRepository_1 = require("../../repository/interface/ILuvuluCardRepository");
let ListAllLuvuluCardService = class ListAllLuvuluCardService {
    constructor(repo) {
        this.repo = repo;
    }
    async listAll(id) {
        const { Institution } = await this.repo.findUser(id);
        const luvuluCard = await this.repo.findAll(Institution.id);
        return luvuluCard;
    }
};
exports.ListAllLuvuluCardService = ListAllLuvuluCardService;
exports.ListAllLuvuluCardService = ListAllLuvuluCardService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [ILuvuluCardRepository_1.ILuvuluCardRepository])
], ListAllLuvuluCardService);
//# sourceMappingURL=listaAll-luvulu-card..service.js.map