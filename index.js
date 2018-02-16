"use strict";
/**
 * Created by user on 2018/1/21/021.
 */
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(require("whatwg-url"));
const URL_1 = require("./lib/valid/URL");
exports.isValidURLObject = URL_1.isValidURLObject;
exports.isValidURL = URL_1.isValidURLObject;
__export(require("./lib/URLImpl"));
var URLImpl_1 = require("./lib/URLImpl");
exports.URLImpl = URLImpl_1.URLImpl;
__export(require("./lib/URLSearchParams"));
var URLSearchParams_1 = require("./lib/URLSearchParams");
exports.URLSearchParams = URLSearchParams_1.URLSearchParams;
exports.URLSearchParamsImpl = URLSearchParams_1.URLSearchParamsImpl;
var urlencoded_1 = require("./lib/urlencoded");
exports.decodeUrlencoded = urlencoded_1.decodeUrlencoded;
exports.parseUrlencoded = urlencoded_1.parseUrlencoded;
const URL_2 = require("./lib/URL");
exports.URL = URL_2.URL;
exports.default = URL_2.URL;
