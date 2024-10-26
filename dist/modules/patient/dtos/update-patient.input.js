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
exports.UpdatePatientInput = void 0;
const create_patient_input_1 = require("./create-patient.input");
const graphql_1 = require("@nestjs/graphql");
let UpdatePatientInput = class UpdatePatientInput extends (0, graphql_1.PartialType)(create_patient_input_1.CreatePatientInput) {
};
exports.UpdatePatientInput = UpdatePatientInput;
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], UpdatePatientInput.prototype, "id", void 0);
exports.UpdatePatientInput = UpdatePatientInput = __decorate([
    (0, graphql_1.InputType)()
], UpdatePatientInput);
//# sourceMappingURL=update-patient.input.js.map