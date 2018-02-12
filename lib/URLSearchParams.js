"use strict";
/**
 * Created by user on 2018/1/21/021.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const URLSearchParams_1 = require("whatwg-url/lib/URLSearchParams");
const URLSearchParams_impl_1 = require("whatwg-url/lib/URLSearchParams-impl");
const class_proxy_1 = require("class-proxy");
URLSearchParams_impl_1.implementation.prototype.inspect = function () {
    let name = 'WHATWGURLSearchParamsImpl';
    return `${name}("${this.toString()}")`;
};
Object.defineProperty(URLSearchParams_impl_1.implementation.prototype, 'inspect', {
    enumerable: false,
});
URLSearchParams_1.interface.prototype.inspect = function () {
    let name = 'WHATWGURLSearchParams';
    return `${name}("${this.toString()}")`;
};
Object.defineProperty(URLSearchParams_1.interface.prototype, 'inspect', {
    enumerable: false,
});
function unsafeRemoveStr(s) {
    return s.replace(/^[\?&]+/, '');
}
exports.unsafeRemoveStr = unsafeRemoveStr;
class URLSearchParamsImplCore extends URLSearchParams_impl_1.implementation {
    constructor(initArgv, privateData = {
            doNotStripQMark: false,
        }, ...argv) {
        let constructorArgs = [];
        if (!Array.isArray(initArgv)) {
            if (typeof initArgv == 'string') {
                constructorArgs = [initArgv];
            }
            else if (initArgv instanceof URLSearchParams_impl_1.implementation || initArgv instanceof URLSearchParams_1.interface) {
                constructorArgs = [initArgv._list.slice()];
            }
            else if (initArgv && typeof initArgv.search == 'string') {
                constructorArgs = [initArgv.search];
            }
            else if (initArgv && typeof initArgv.query == 'string') {
                constructorArgs = [initArgv.query];
            }
            else if (initArgv === true) {
                constructorArgs = [''];
            }
            else {
                // console.warn(initArgv);
                constructorArgs = initArgv;
            }
            if (privateData && privateData.doNotStripQMark && typeof constructorArgs[0] == 'string') {
                /**
                 * unsafe remove ??&
                 * @type {string}
                 */
                constructorArgs[0] = unsafeRemoveStr(constructorArgs[0]);
            }
        }
        else {
            constructorArgs = initArgv;
        }
        super(constructorArgs, privateData, ...argv);
        if (privateData && privateData.inheritURL) {
            if (typeof privateData.inheritURL == 'object') {
                this._url = privateData.inheritURL;
            }
            else if (initArgv._url) {
                this._url = initArgv._url;
            }
        }
    }
    /**
     *
     * @param unsafe remove ??&
     * @param {boolean} unsafe
     * @returns {string}
     */
    static stripQMark(s, unsafe = true) {
        return unsafe ? unsafeRemoveStr(s) : s.replace(/^\?/, '');
    }
    static create(constructorArgs, IPrivateData, ...argv) {
        return new this(constructorArgs, IPrivateData, ...argv);
    }
    clone() {
        return new exports.URLSearchParamsImpl(this);
    }
    get [Symbol.toStringTag]() {
        return 'URLSearchParamsImpl';
    }
    inspect() {
        let name = this[Symbol.toStringTag];
        return `${name}("${this.toString()}")`;
    }
    toJSON() {
        return this.toString();
    }
    toArray() {
        return this._list.slice();
    }
    listAll() {
        return this.toArray();
    }
    toString(bool) {
        if (bool) {
            return this.listAll()
                .reduce(function (a, value) {
                a.push(value.join('='));
                return a;
            }, [])
                .join('&');
        }
        return super.toString();
    }
    get length() {
        return this._list.length;
    }
    [Symbol.iterator]() {
        return super[Symbol.iterator]();
    }
    keys() {
        return URLSearchParams_1.createDefaultIterator(this, 'key');
    }
    values() {
        return URLSearchParams_1.createDefaultIterator(this, 'values');
    }
    entries() {
        return super[Symbol.iterator]();
    }
    _updateSteps() {
        super._updateSteps();
        return this;
    }
    sort() {
        super.sort();
        return this;
    }
    has(name) {
        return super.has(name);
    }
    get(name) {
        return super.get(name);
    }
    getAll(name) {
        return super.getAll(name);
    }
    set(name, value) {
        super.set(name, value);
        return this;
    }
    delete(name) {
        super.delete(name);
        return this;
    }
    append(name, value) {
        super.append(name, value);
        return this;
    }
}
exports.URLSearchParamsImplCore = URLSearchParamsImplCore;
class URLSearchParamsCore extends URLSearchParams_1.interface {
    static create(...argv) {
        return new this(...argv);
    }
    get [Symbol.toStringTag]() {
        return 'URLSearchParams';
    }
    toArray() {
        return this._list.slice();
    }
    listAll() {
        return this.toArray();
    }
    toString(bool) {
        if (bool) {
            return this.listAll()
                .reduce(function (a, value) {
                a.push(value.join('='));
                return a;
            }, [])
                .join('&');
        }
        return super.toString();
    }
    get length() {
        return this._list.length;
    }
    entries() {
        return super.entries();
    }
    keys() {
        return super.keys();
    }
    values() {
        return super.values();
    }
    forEach(callback) {
        return super.forEach(callback);
    }
    sort() {
        return super.sort();
    }
    has(name) {
        return super.has(name);
    }
    set(name, value) {
        return super.set(name, value);
    }
}
exports.URLSearchParamsCore = URLSearchParamsCore;
function packProxyURLSearchParams(classURL, handler) {
    return class_proxy_1.default(classURL, Object.assign({
        get(target, name) {
            return target[name];
        },
        set(target, prop, value, receiver) {
            target[prop] = value;
            return true;
        },
    }, handler));
}
exports.packProxyURLSearchParams = packProxyURLSearchParams;
exports.URLSearchParamsImpl = packProxyURLSearchParams(URLSearchParamsImplCore);
exports.URLSearchParams = packProxyURLSearchParams(URLSearchParamsCore);
exports.default = exports.URLSearchParams;
