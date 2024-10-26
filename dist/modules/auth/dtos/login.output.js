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
exports.LoginOutput = void 0;
const user_1 = require("../../user/entities/user");
const graphql_1 = require("@nestjs/graphql");
let LoginOutput = class LoginOutput {
};
exports.LoginOutput = LoginOutput;
__decorate([
    (0, graphql_1.Field)(() => String, {}),
    __metadata("design:type", String)
], LoginOutput.prototype, "token", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Number)
], LoginOutput.prototype, "expiresIn", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_1.Users, {}),
    __metadata("design:type", user_1.Users)
], LoginOutput.prototype, "user", void 0);
exports.LoginOutput = LoginOutput = __decorate([
    (0, graphql_1.ObjectType)()
], LoginOutput);
//# sourceMappingURL=login.output.js.map