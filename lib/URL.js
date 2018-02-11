"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const conversions = require("webidl-conversions");
const URL_1 = require("whatwg-url/lib/URL");
const URLImpl_1 = require("./URLImpl");
const URL_2 = require("./valid/URL");
URL_1.interface.prototype.inspect = function inspect() {
    let name = 'whatwg-url';
    return `${name}("${this.toString()}")`;
};
Object.defineProperty(URL_1.interface.prototype, 'inspect', {
    enumerable: false,
});
class URL extends URLImpl_1.URLImpl {
    constructor(href, base) {
        if (Array.isArray(href)) {
            [href, base] = href;
        }
        href = conversions["USVString"](URL_2.isValidURLObject(href), { context: "Failed to construct 'URL': parameter 1" });
        if (base !== undefined && base !== null) {
            base = conversions["USVString"](URL_2.isValidURLObject(base), { context: "Failed to construct 'URL': parameter 2" });
        }
        super([href, base || undefined]);
    }
    static create(href, base) {
        return new this(href, base);
    }
}
exports.URL = URL;
exports.default = URL;
