"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(require("whatwg-url"));
const URL_1 = require("./lib/valid/URL");
exports.isValidURLObject = URL_1.isValidURLObject;
exports.isValidURL = URL_1.isValidURLObject;
const URLSearchParams_1 = require("./lib/URLSearchParams");
exports.URLSearchParams = URLSearchParams_1.URLSearchParams;
const URL_2 = require("./lib/URL");
exports.URL = URL_2.URL;
const URLImpl_1 = require("./lib/URLImpl");
exports.URLImpl = URLImpl_1.URLImpl;
exports.default = URL_2.URL;
