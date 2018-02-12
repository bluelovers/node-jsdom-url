"use strict";
/**
 * Created by user on 2018/1/21/021.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const conversions = require("webidl-conversions");
const URL_1 = require("whatwg-url/lib/URL");
const URLImpl_1 = require("./URLImpl");
const URL_2 = require("./valid/URL");
URL_1.interface.prototype.inspect = function inspect() {
    let name = 'WHATWGURL';
    return `${name}("${this.toString()}")`;
};
Object.defineProperty(URL_1.interface.prototype, 'inspect', {
    enumerable: false,
});
class URLCore extends URLImpl_1.URLImplCore {
    /*
    href: string;
    origin: string;
    protocol: string;
    username: string;
    password: string;
    host: string;
    hostname: string;
    port: string;
    pathname: string;
    search: string;
    hash: string;
    searchParams: URLSearchParams;

    _query?: URLSearchParams;
    _url?: URLImplCore.IImpl;
    */
    constructor(href, base) {
        if (Array.isArray(href)) {
            [href, base] = href;
        }
        //console.log(111, [href, base]);
        href = conversions["USVString"](URL_2.isValidURLObject(href), { context: "Failed to construct 'URL': parameter 1" });
        if (base !== undefined && base !== null) {
            base = conversions["USVString"](URL_2.isValidURLObject(base), { context: "Failed to construct 'URL': parameter 2" });
        }
        //console.log(333, [href, base]);
        super([href, base || undefined]);
    }
    get [Symbol.toStringTag]() {
        return 'URL';
    }
}
exports.URLCore = URLCore;
exports.URL = URLImpl_1.packProxyURL(URLCore);
/*
let url = new URL(['https://www.npmjs.com/package/dgeni?l=1&l=2&k=kkk前篇']);
let url2 = new URLImpl(['https://www.npmjs.com/package/dgeni?l=1&l=2&k=kkk']);

console.log(url, url instanceof URLImpl);
console.log(url2, url2 instanceof URL, url + '');
*/
exports.default = exports.URL;
