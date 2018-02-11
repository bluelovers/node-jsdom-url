"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const class_proxy_1 = require("class-proxy");
const URL_impl_1 = require("whatwg-url/lib/URL-impl");
const URL_1 = require("./valid/URL");
class URLImplCore extends URL_impl_1.implementation {
    constructor(href, base) {
        if (Array.isArray(href)) {
            [href, base] = href;
        }
        super([href && href.toString(), base ? base.toString() : undefined]);
    }
    static create(href, base) {
        return new this(href, base);
    }
    get [Symbol.toStringTag]() {
        return 'URLImpl';
    }
    inspect() {
        let name = this[Symbol.toStringTag];
        return `${name}("${this.toString()}")`;
    }
    toJSON() {
        return this.href;
    }
    toString() {
        return this.href;
    }
    toObject() {
        const self = this;
        return Object.keys(self).reduce(function (ret, k) {
            ret[k] = self[k];
            return ret;
        }, {});
    }
    static isValidURLObject(url) {
        return URL_1.isValidURLObject(url);
    }
}
exports.URLImplCore = URLImplCore;
function packProxy(classURL) {
    return class_proxy_1.default(classURL, {
        get(target, name) {
            return target[name];
        },
        set(target, prop, value, receiver) {
            if (prop == '_query') {
                value._url = target;
            }
            target[prop] = value;
            return true;
        },
        ownKeys(target) {
            return [
                'href',
                'origin',
                'protocol',
                'username',
                'password',
                'host',
                'hostname',
                'port',
                'pathname',
                'search',
                'hash',
                'searchParams',
            ];
        },
        getOwnPropertyDescriptor(target, prop) {
            return {
                value: target[prop],
                enumerable: this.ownKeys(target).includes(prop),
                configurable: true,
            };
        },
    });
}
exports.packProxy = packProxy;
exports.URLImpl = packProxy(URLImplCore);
exports.default = exports.URLImpl;
