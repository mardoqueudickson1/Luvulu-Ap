"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFileService = void 0;
const common_1 = require("@nestjs/common");
const findPhotoFile_1 = require("../../../../utils/shared/providers/storageProviders/implementations/supaBase/findPhotoFile");
const supaBaseConfig_1 = require("../../../../utils/shared/providers/storageProviders/implementations/supaBase/supaBaseConfig");
let FindFileService = class FindFileService {
    constructor() {
        this.supabaseClient = (0, supaBaseConfig_1.createSupabaseClient)();
    }
    async getPhotoUrl(fileName) {
        const findFilefind = await findPhotoFile_1.findSupabaseFileService.getPhotoUrl(fileName);
        return findFilefind;
    }
};
exports.FindFileService = FindFileService;
exports.FindFileService = FindFileService = __decorate([
    (0, common_1.Injectable)()
], FindFileService);
//# sourceMappingURL=find-user-avatar.service.js.map