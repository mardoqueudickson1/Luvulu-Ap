"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
const crypto_1 = require("crypto");
const multer = require("multer");
const tmpFolder = (0, path_1.resolve)(__dirname, '..', '..', 'tmp');
exports.default = {
    driver: process.env.STORAGE_DRIVER,
    tmpFolder,
    uploadsFolder: (0, path_1.resolve)(tmpFolder, 'uploads'),
    multer: {
        storage: multer.diskStorage({
            destination: tmpFolder,
            filename(req, file, callback) {
                const fileHash = crypto_1.default.randomBytes(10).toString('hex');
                const fileName = `${fileHash}-${file.originalname}`;
                return callback(null, fileName);
            },
        }),
    },
    config: {
        disk: {},
        aws: {
            bucket: process.env.S3_BUCKET_NAME,
        },
    },
};
//# sourceMappingURL=upload.js.map