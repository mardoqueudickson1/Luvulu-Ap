"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatPhoneNumber = void 0;
function formatPhoneNumber(phoneNumber) {
    const cleanedPhoneNumber = phoneNumber.replace(/\D/g, '');
    const formattedPhoneNumber = cleanedPhoneNumber.startsWith('+')
        ? cleanedPhoneNumber
        : `+244${cleanedPhoneNumber}`;
    return formattedPhoneNumber;
}
exports.formatPhoneNumber = formatPhoneNumber;
//# sourceMappingURL=formatNumber.js.map