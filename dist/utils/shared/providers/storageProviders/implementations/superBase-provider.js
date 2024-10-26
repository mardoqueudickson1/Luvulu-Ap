"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SuperBaseProviderRepository = void 0;
const common_1 = require("@nestjs/common");
const supabase_js_1 = require("@supabase/supabase-js");
class SuperBaseProviderRepository {
    constructor() {
        this.superBaseClient = supabase_js_1.default;
    }
    async saveFile(file) {
        const supabaseURL = process.env.SUPABASE_URL;
        const supabaseKEY = process.env.SUPABASE_KEY;
        const superBaseBucket = process.env.SUPERBASE_BUCKET_NAME;
        const superBase = this.superBaseClient.createClient(supabaseURL, supabaseKEY, {
            auth: {
                persistSession: false,
            },
        });
        const { data, error } = await superBase.storage
            .from(superBaseBucket)
            .upload(file.originalname, file.buffer, { upsert: true });
        if (error) {
            throw new common_1.BadRequestException('Ups, houve um erro ao fazer upload');
        }
        const result = {
            path: data.path,
        };
        return result;
    }
    async deleteFile(file) {
        const supabaseURL = process.env.SUPABASE_URL;
        const supabaseKEY = process.env.SUPABASE_KEY;
        const superBaseBucket = process.env.SUPERBASE_BUCKET_NAME;
        const superBase = this.superBaseClient.createClient(supabaseURL, supabaseKEY, {
            auth: {
                persistSession: false,
            },
        });
        const { error } = await superBase.storage
            .from(superBaseBucket)
            .remove([file.originalname]);
        if (error) {
            throw new common_1.BadRequestException('Falha ao excluir o avatar');
        }
    }
}
exports.SuperBaseProviderRepository = SuperBaseProviderRepository;
//# sourceMappingURL=superBase-provider.js.map