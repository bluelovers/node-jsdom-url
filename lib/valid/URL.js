"use strict";
/**
 * Created by user on 2018/1/21/021.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const URL_impl_1 = require("whatwg-url/lib/URL-impl");
const URL_1 = require("whatwg-url/lib/URL");
function isValidURLObject(obj) {
    if (!obj) {
        return obj;
    }
    else if (typeof obj == 'string') {
        return obj;
    }
    else if (obj instanceof URL_impl_1.implementation || obj instanceof URL_1.interface) {
        return obj.href;
    }
    else if (typeof obj.href == 'string') {
        return obj.href;
    }
    return null;
}
exports.isValidURLObject = isValidURLObject;
exports.default = isValidURLObject;
