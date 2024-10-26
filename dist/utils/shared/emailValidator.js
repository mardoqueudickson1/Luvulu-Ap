"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailValidator = void 0;
const EmailValidator = (email) => {
    return /^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/.test(email);
};
exports.EmailValidator = EmailValidator;
//# sourceMappingURL=emailValidator.js.map