"use strict";
exports.__esModule = true;
exports.User = void 0;
var faker = require("faker");
var User = /** @class */ (function () {
    function User() {
        this.name = faker.name.firstName();
        this.location = {
            lat: parseFloat(faker.address.longitude()),
            lng: parseFloat(faker.address.longitude())
        };
    }
    return User;
}());
exports.User = User;
console.log("Hello there");
var user = new User();
console.log("User is", user);
