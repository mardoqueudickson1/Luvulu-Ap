"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestApiModule = void 0;
const common_1 = require("@nestjs/common");
const uploadRest_controller_1 = require("./controller/uploadRest.controller");
const upload_user_avatar_service_1 = require("../usecases/upload-avatar/upload-user-avatar.service");
let RestApiModule = class RestApiModule {
};
exports.RestApiModule = RestApiModule;
exports.RestApiModule = RestApiModule = __decorate([
    (0, common_1.Module)({
        imports: [upload_user_avatar_service_1.SuperBaseService,],
        controllers: [uploadRest_controller_1.AppController],
    })
], RestApiModule);
//# sourceMappingURL=restApi.module.js.map