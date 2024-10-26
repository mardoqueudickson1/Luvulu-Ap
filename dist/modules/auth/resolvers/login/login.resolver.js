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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginResolver = void 0;
const login_input_1 = require("../../dtos/login.input");
const login_output_1 = require("../../dtos/login.output");
const login_service_1 = require("../../usecases/login/login.service");
const graphql_1 = require("@nestjs/graphql");
let LoginResolver = class LoginResolver {
    constructor(loginService) {
        this.loginService = loginService;
    }
    async Login(data) {
        const response = await this.loginService.validateUser(data);
        return {
            user: response.user,
            token: response.token,
            expiresIn: response.expiresIn,
        };
    }
};
exports.LoginResolver = LoginResolver;
__decorate([
    (0, graphql_1.Mutation)(() => login_output_1.LoginOutput),
    __param(0, (0, graphql_1.Args)('data')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [login_input_1.LoginInput]),
    __metadata("design:returntype", Promise)
], LoginResolver.prototype, "Login", null);
exports.LoginResolver = LoginResolver = __decorate([
    (0, graphql_1.Resolver)(),
    __metadata("design:paramtypes", [login_service_1.LoginService])
], LoginResolver);
//# sourceMappingURL=login.resolver.js.map