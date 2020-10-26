"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const helpers_1 = require("./helpers");
let invalidUsers = [];
let validUsers = [];
function validateUser(user) {
    let countOfValid = 0;
    let countOfInvalid = 0;
    user.forEach(element => {
        const { traineeEmail, reviewerEmail } = element;
        if (helpers_1.validateEmail(traineeEmail) == true) {
            countOfValid = countOfValid + 1;
            validUsers.push(traineeEmail);
        }
        else {
            invalidUsers.push(traineeEmail);
            countOfInvalid = countOfInvalid + 1;
        }
        if (helpers_1.validateEmail(reviewerEmail) == true) {
            validUsers.push(reviewerEmail);
            countOfValid = countOfValid + 1;
        }
        else {
            invalidUsers.push(reviewerEmail);
            countOfInvalid = countOfInvalid + 1;
        }
    });
    console.log("Valid users are ", validUsers);
    console.log("Count of valid users = ", countOfValid);
    console.log("Invalid users are ", invalidUsers);
    console.log("count of invalid users = ", countOfInvalid);
}
exports.default = validateUser;
//validateUser(user);
//# sourceMappingURL=validation.js.map