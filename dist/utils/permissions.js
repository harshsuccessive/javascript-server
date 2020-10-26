"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let d;
const constant_1 = require("../constant");
function hasPermission(moduleName, role, permissionType) {
    console.log(constant_1.permissions[moduleName][permissionType].includes(role));
}
exports.default = hasPermission;
;
//hasPermission('getUsers','trainer','read');
//# sourceMappingURL=permissions.js.map