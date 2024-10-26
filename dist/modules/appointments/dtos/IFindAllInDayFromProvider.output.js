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
exports.IFindAllInDayFromProvider = void 0;
const graphql_1 = require("@nestjs/graphql");
let IFindAllInDayFromProvider = class IFindAllInDayFromProvider {
};
exports.IFindAllInDayFromProvider = IFindAllInDayFromProvider;
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], IFindAllInDayFromProvider.prototype, "doctorId", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Number)
], IFindAllInDayFromProvider.prototype, "day", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Number)
], IFindAllInDayFromProvider.prototype, "month", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Number)
], IFindAllInDayFromProvider.prototype, "year", void 0);
exports.IFindAllInDayFromProvider = IFindAllInDayFromProvider = __decorate([
    (0, graphql_1.InputType)()
], IFindAllInDayFromProvider);
//# sourceMappingURL=IFindAllInDayFromProvider.output.js.map