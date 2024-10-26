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
exports.ResponseRatedDoctor = exports.InstitutionTypes = exports.TopResponseAllDoctor = exports.Institution = exports.UserInfo = void 0;
const graphql_1 = require("@nestjs/graphql");
const reponseRating_1 = require("./reponseRating");
let UserInfo = class UserInfo {
};
exports.UserInfo = UserInfo;
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], UserInfo.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], UserInfo.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], UserInfo.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], UserInfo.prototype, "nationality", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], UserInfo.prototype, "Role", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], UserInfo.prototype, "phone", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], UserInfo.prototype, "neigbhod", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], UserInfo.prototype, "city", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], UserInfo.prototype, "nif", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], UserInfo.prototype, "municipality", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], UserInfo.prototype, "avatar", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], UserInfo.prototype, "addressComplement", void 0);
exports.UserInfo = UserInfo = __decorate([
    (0, graphql_1.ObjectType)()
], UserInfo);
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
let TopResponseAllDoctor = class TopResponseAllDoctor {
};
exports.TopResponseAllDoctor = TopResponseAllDoctor;
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], TopResponseAllDoctor.prototype, "specialty", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], TopResponseAllDoctor.prototype, "bio", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], TopResponseAllDoctor.prototype, "pacientCared", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Number)
], TopResponseAllDoctor.prototype, "registrationNumber", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", Boolean)
], TopResponseAllDoctor.prototype, "isFavorited", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserInfo),
    __metadata("design:type", UserInfo)
], TopResponseAllDoctor.prototype, "user", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", Object)
], TopResponseAllDoctor.prototype, "averageRating", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", Object)
], TopResponseAllDoctor.prototype, "totalRating", void 0);
__decorate([
    (0, graphql_1.Field)(() => [Institution]),
    __metadata("design:type", Array)
], TopResponseAllDoctor.prototype, "institutions", void 0);
__decorate([
    (0, graphql_1.Field)(() => [reponseRating_1.ResponseRating]),
    __metadata("design:type", Array)
], TopResponseAllDoctor.prototype, "rating", void 0);
exports.TopResponseAllDoctor = TopResponseAllDoctor = __decorate([
    (0, graphql_1.ObjectType)()
], TopResponseAllDoctor);
let InstitutionTypes = class InstitutionTypes {
};
exports.InstitutionTypes = InstitutionTypes;
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], InstitutionTypes.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], InstitutionTypes.prototype, "city", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], InstitutionTypes.prototype, "municipality", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], InstitutionTypes.prototype, "name", void 0);
exports.InstitutionTypes = InstitutionTypes = __decorate([
    (0, graphql_1.ObjectType)()
], InstitutionTypes);
let ResponseRatedDoctor = class ResponseRatedDoctor {
};
exports.ResponseRatedDoctor = ResponseRatedDoctor;
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], ResponseRatedDoctor.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], ResponseRatedDoctor.prototype, "specialty", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], ResponseRatedDoctor.prototype, "institutionId", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], ResponseRatedDoctor.prototype, "bio", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Number)
], ResponseRatedDoctor.prototype, "registrationNumber", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", InstitutionTypes)
], ResponseRatedDoctor.prototype, "institutions", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", UserInfo)
], ResponseRatedDoctor.prototype, "user", void 0);
__decorate([
    (0, graphql_1.Field)(() => [reponseRating_1.ResponseRating]),
    __metadata("design:type", Array)
], ResponseRatedDoctor.prototype, "rating", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Number)
], ResponseRatedDoctor.prototype, "totalRating", void 0);
exports.ResponseRatedDoctor = ResponseRatedDoctor = __decorate([
    (0, graphql_1.ObjectType)()
], ResponseRatedDoctor);
//# sourceMappingURL=topRatedDoctors.js.map