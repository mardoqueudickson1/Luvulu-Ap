"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateDateRange = void 0;
const common_1 = require("@nestjs/common");
const date_fns_1 = require("date-fns");
const date_fns_tz_1 = require("date-fns-tz");
const ANGOLA_TIMEZONE = 'Africa/Luanda';
function validateDateRange(startTime, endTime) {
    const currentAngolaTime = new Date();
    const parsedStartedAt = (0, date_fns_tz_1.utcToZonedTime)(startTime, ANGOLA_TIMEZONE);
    const parsedEndedAt = (0, date_fns_tz_1.utcToZonedTime)(endTime, ANGOLA_TIMEZONE);
    if ((0, date_fns_1.isBefore)(parsedStartedAt, currentAngolaTime)) {
        throw new common_1.BadRequestException('A data de início não pode ser anterior à data atual em Angola.');
    }
    if ((0, date_fns_1.isBefore)(parsedEndedAt, currentAngolaTime)) {
        throw new common_1.BadRequestException('A data de término não pode ser anterior à data atual em Angola.');
    }
    if ((0, date_fns_1.isAfter)(parsedEndedAt, currentAngolaTime)) {
        throw new common_1.BadRequestException('A data de término não pode ser posterior à data atual em Angola.');
    }
    if ((0, date_fns_1.isBefore)(parsedEndedAt, parsedStartedAt)) {
        throw new common_1.BadRequestException('A data de término não pode ser anterior à data de início.');
    }
}
exports.validateDateRange = validateDateRange;
//# sourceMappingURL=validateDate.js.map