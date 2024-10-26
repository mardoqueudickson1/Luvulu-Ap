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
exports.InstitutionTypes = exports.TopResponseAllClinic = exports.Institution = exports.UserInfos = void 0;
const graphql_1 = require("@nestjs/graphql");
const reponseClinicRating_1 = require("./reponseClinicRating");
let UserInfos = class UserInfos {
};
exports.UserInfos = UserInfos;
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], UserInfos.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], UserInfos.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], UserInfos.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], UserInfos.prototype, "nationality", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], UserInfos.prototype, "Role", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], UserInfos.prototype, "phone", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], UserInfos.prototype, "neigbhod", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], UserInfos.prototype, "city", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], UserInfos.prototype, "nif", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], UserInfos.prototype, "avatar", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], UserInfos.prototype, "municipality", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], UserInfos.prototype, "addressComplement", void 0);
exports.UserInfos = UserInfos = __decorate([
    (0, graphql_1.ObjectType)()
], UserInfos);
let Institution = class Institution {
};
exports.Institution = Institution;
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Institution.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Institution.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Institution.prototype, "city", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Institution.prototype, "municipality", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Institution.prototype, "neigbhod", void 0);
exports.Institution = Institution = __decorate([
    (0, graphql_1.ObjectType)()
], Institution);
let TopResponseAllClinic = class TopResponseAllClinic {
};
exports.TopResponseAllClinic = TopResponseAllClinic;
__decorate([
    (0, graphql_1.Field)(() => UserInfos),
    __metadata("design:type", UserInfos)
], TopResponseAllClinic.prototype, "user", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", Boolean)
], TopResponseAllClinic.prototype, "isFavorited", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", Object)
], TopResponseAllClinic.prototype, "averageRating", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", Object)
], TopResponseAllClinic.prototype, "totalRating", void 0);
__decorate([
    (0, graphql_1.Field)(() => [reponseClinicRating_1.ServiceClinic], { nullable: true }),
    __metadata("design:type", Array)
], TopResponseAllClinic.prototype, "services", void 0);
__decorate([
    (0, graphql_1.Field)(() => Number),
    __metadata("design:type", Number)
], TopResponseAllClinic.prototype, "pacientsCared", void 0);
__decorate([
    (0, graphql_1.Field)(() => [Number]),
    __metadata("design:type", Array)
], TopResponseAllClinic.prototype, "doctorRated", void 0);
exports.TopResponseAllClinic = TopResponseAllClinic = __decorate([
    (0, graphql_1.ObjectType)()
], TopResponseAllClinic);
let InstitutionTypes = class InstitutionTypes {
};
exports.InstitutionTypes = InstitutionTypes;
__decorate([
    (0, graphql_1.Field)(() => [String]),
    __metadata("design:type", Array)
], InstitutionTypes.prototype, "name", void 0);
exports.InstitutionTypes = InstitutionTypes = __decorate([
    (0, graphql_1.ObjectType)()
], InstitutionTypes);
//# sourceMappingURL=topRatedClinic.js.map