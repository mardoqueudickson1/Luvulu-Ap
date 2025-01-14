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
exports.CreateNotificationInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const client_1 = require("@prisma/client");
let CreateNotificationInput = class CreateNotificationInput {
};
exports.CreateNotificationInput = CreateNotificationInput;
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], CreateNotificationInput.prototype, "content", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], CreateNotificationInput.prototype, "appointmentId", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], CreateNotificationInput.prototype, "luvuluCardId", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Boolean)
], CreateNotificationInput.prototype, "read", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], CreateNotificationInput.prototype, "type", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], CreateNotificationInput.prototype, "doctor_id", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], CreateNotificationInput.prototype, "patient_id", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], CreateNotificationInput.prototype, "institution_id", void 0);
exports.CreateNotificationInput = CreateNotificationInput = __decorate([
    (0, graphql_1.InputType)()
], CreateNotificationInput);
//# sourceMappingURL=create-notification.input.js.map