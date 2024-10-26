"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateUniquePacientCardNumber = exports.formatName = exports.toUpperCase = exports.generatePatientNumber = exports.comparePassword = exports.generateHash = exports.generateUniqueHospitalNumber = void 0;
const bcrypt = require("bcrypt");
function generateUniqueHospitalNumber() {
    const currentYear = new Date().getFullYear();
    const randomNumber = Math.floor(Math.random() * 10000)
        .toString()
        .padStart(4, '0');
    const generatedNumber = `${currentYear}${randomNumber}`;
    return generatedNumber;
}
exports.generateUniqueHospitalNumber = generateUniqueHospitalNumber;
async function generateHash(password) {
    const hash = await bcrypt.hash(password, 10);
    return hash;
}
exports.generateHash = generateHash;
function comparePassword(first, sec) {
    const isEqual = bcrypt.compareSync(first, sec);
    return isEqual;
}
exports.comparePassword = comparePassword;
function generatePatientNumber() {
    const min = 100000;
    const max = 999999;
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
exports.generatePatientNumber = generatePatientNumber;
function toUpperCase(value) {
    return value.toUpperCase();
}
exports.toUpperCase = toUpperCase;
function formatName(value) {
    const lowercasedValue = value.toLowerCase();
    if (hasSpaces(lowercasedValue)) {
        return capitalizeEachWord(lowercasedValue);
    }
    else {
        return capitalizeFirstLetter(lowercasedValue);
    }
}
exports.formatName = formatName;
function hasSpaces(lowercasedValue) {
    return lowercasedValue.indexOf(' ') !== -1;
}
function capitalizeEachWord(lowercasedValue) {
    return lowercasedValue
        .split(' ')
        .map((word) => capitalizeFirstLetter(word))
        .join(' ');
}
function capitalizeFirstLetter(lowercasedValue) {
    return lowercasedValue.charAt(0).toUpperCase() + lowercasedValue.slice(1);
}
function generateUniquePacientCardNumber() {
    const timestamp = Date.now().toString();
    const uniqueSequence = parseInt(timestamp.slice(-15), 10);
    return uniqueSequence;
}
exports.generateUniquePacientCardNumber = generateUniquePacientCardNumber;
//# sourceMappingURL=utils.js.map