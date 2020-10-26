"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const patterns_1 = require("./patterns");
patterns_1.diamond(5);
console.log();
patterns_1.equilateral(5);
const utils_1 = require("./utils");
const utils_2 = require("./utils");
const user = [{
        traineeEmail: 'trainee1@successive.tech',
        reviewerEmail: 'reviewer1@successive.tech',
    }, {
        traineeEmail: 'trainee1@succssive.tech',
        reviewerEmail: 'reviewer1@successive.tech',
    }];
utils_1.hasPermission('getUsers', 'trainer', 'read');
utils_2.validateUser(user);
//# sourceMappingURL=index.js.map