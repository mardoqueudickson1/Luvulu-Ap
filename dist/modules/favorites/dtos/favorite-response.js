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
exports.ResponseAllFavotites = exports.InstitutionInformations = exports.DoctorInfor = void 0;
const graphql_1 = require("@nestjs/graphql");
let DoctorInfor = class DoctorInfor {
};
exports.DoctorInfor = DoctorInfor;
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], DoctorInfor.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], DoctorInfor.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], DoctorInfor.prototype, "city", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], DoctorInfor.prototype, "municipality", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], DoctorInfor.prototype, "specialty", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], DoctorInfor.prototype, "avatar", void 0);
exports.DoctorInfor = DoctorInfor = __decorate([
    (0, graphql_1.ObjectType)()
], DoctorInfor);
let InstitutionInformations = class InstitutionInformations {
};
exports.InstitutionInformations = InstitutionInformations;
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], InstitutionInformations.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], InstitutionInformations.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], InstitutionInformations.prototype, "city", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], InstitutionInformations.prototype, "municipality", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], InstitutionInformations.prototype, "avatar", void 0);
exports.InstitutionInformations = InstitutionInformations = __decorate([
    (0, graphql_1.ObjectType)()
], InstitutionInformations);
let ResponseAllFavotites = class ResponseAllFavotites {
};
exports.ResponseAllFavotites = ResponseAllFavotites;
__decorate([
    (0, graphql_1.Field)(() => [DoctorInfor]),
    __metadata("design:type", Array)
], ResponseAllFavotites.prototype, "doctors", void 0);
__decorate([
    (0, graphql_1.Field)(() => [InstitutionInformations]),
    __metadata("design:type", Array)
], ResponseAllFavotites.prototype, "institutions", void 0);
exports.ResponseAllFavotites = ResponseAllFavotites = __decorate([
    (0, graphql_1.ObjectType)()
], ResponseAllFavotites);
//# sourceMappingURL=favorite-response.js.map