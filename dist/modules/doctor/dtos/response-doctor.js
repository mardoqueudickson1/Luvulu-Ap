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
exports.ResponseDoctor = exports.InstitutionType = void 0;
const graphql_1 = require("@nestjs/graphql");
const user_1 = require("../../user/entities/user");
let InstitutionType = class InstitutionType {
};
exports.InstitutionType = InstitutionType;
__decorate([
    (0, graphql_1.Field)(() => [String]),
    __metadata("design:type", Array)
], InstitutionType.prototype, "name", void 0);
exports.InstitutionType = InstitutionType = __decorate([
    (0, graphql_1.ObjectType)()
], InstitutionType);
let ResponseDoctor = class ResponseDoctor {
};
exports.ResponseDoctor = ResponseDoctor;
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], ResponseDoctor.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], ResponseDoctor.prototype, "specialty", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], ResponseDoctor.prototype, "institutionId", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], ResponseDoctor.prototype, "bio", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Number)
], ResponseDoctor.prototype, "registrationNumber", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", InstitutionType)
], ResponseDoctor.prototype, "institution", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", user_1.Users)
], ResponseDoctor.prototype, "user", void 0);
exports.ResponseDoctor = ResponseDoctor = __decorate([
    (0, graphql_1.ObjectType)()
], ResponseDoctor);
//# sourceMappingURL=response-doctor.js.map