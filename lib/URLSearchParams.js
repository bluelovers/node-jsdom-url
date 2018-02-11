"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const URLSearchParams_1 = require("whatwg-url/lib/URLSearchParams");
exports.URLSearchParams = URLSearchParams_1.interface;
URLSearchParams_1.interface.prototype.inspect = function inspect() {
    let name = 'URLSearchParams';
    return `${name}("${this.toString()}")`;
};
URLSearchParams_1.interface.prototype.toJSON = function inspect() {
    return this.toString();
};
Object.defineProperty(URLSearchParams_1.interface.prototype, 'inspect', {
    enumerable: false,
});
Object.defineProperty(URLSearchParams_1.interface.prototype, 'toJSON', {
    enumerable: false,
});
exports.default = URLSearchParams_1.interface;
