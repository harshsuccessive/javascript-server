"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateEmail = void 0;
function validateEmail(email) {
    let regx = /^([a-zA-z0-9/.-]+)@(successive).(tech)$/;
    return regx.test(email);
}
exports.validateEmail = validateEmail;
//# sourceMappingURL=helpers.js.map