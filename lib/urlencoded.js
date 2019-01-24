"use strict";
/**
 * Created by user on 2018/2/16/016.
 */
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(require("whatwg-url/lib/urlencoded"));
const urlencoded_1 = require("whatwg-url/lib/urlencoded");
const infra_1 = require("whatwg-url/lib/infra");
exports.isASCIIHex = infra_1.isASCIIHex;
function decodeUrlencoded(input, options = {
    noEqual: true,
}) {
    return joinUrldecodeed(parseUrlencoded(input, options), options);
}
exports.decodeUrlencoded = decodeUrlencoded;
function joinUrldecodeed(list, options = {}) {
    return list
        .reduce(function (a, value) {
        if (options.unsafe && (typeof value[1] == 'undefined' || value[1] === '')) {
            a.push(value[0]);
        }
        else {
            a.push(value.join('='));
        }
        return a;
    }, [])
        .join('&');
}
exports.joinUrldecodeed = joinUrldecodeed;
function strictlySplitByteSequence(buf, cp) {
    const list = [];
    let last = 0;
    let i = buf.indexOf(cp);
    while (i >= 0) {
        list.push(buf.slice(last, i));
        last = i + 1;
        i = buf.indexOf(cp, last);
    }
    if (last !== buf.length) {
        list.push(buf.slice(last));
    }
    return list;
}
exports.strictlySplitByteSequence = strictlySplitByteSequence;
function replaceByteInByteSequence(buf, from, to) {
    let i = buf.indexOf(from);
    while (i >= 0) {
        buf[i] = to;
        i = buf.indexOf(from, i + 1);
    }
    return buf;
}
exports.replaceByteInByteSequence = replaceByteInByteSequence;
function bufferFrom(input, ...argv) {
    return Buffer.isBuffer(input) ? input : Buffer.from(input, ...argv);
}
exports.bufferFrom = bufferFrom;
function parseUrlencoded(input, options = {}) {
    const sequences = strictlySplitByteSequence(bufferFrom(input), 38);
    const output = [];
    for (const bytes of sequences) {
        if (bytes.length === 0) {
            continue;
        }
        let _noEqual;
        let name;
        let value;
        const indexOfEqual = bytes.indexOf(61);
        if (indexOfEqual >= 0) {
            name = bytes.slice(0, indexOfEqual);
            value = bytes.slice(indexOfEqual + 1);
        }
        else {
            name = bytes;
            value = Buffer.alloc(0);
            _noEqual = true;
        }
        name = replaceByteInByteSequence(Buffer.from(name), 43, 32);
        value = replaceByteInByteSequence(Buffer.from(value), 43, 32);
        if (_noEqual && options.noEqual) {
            output.push([urlencoded_1.percentDecode(name).toString()]);
        }
        else {
            output.push([urlencoded_1.percentDecode(name).toString(), urlencoded_1.percentDecode(value).toString()]);
        }
    }
    return output;
}
exports.parseUrlencoded = parseUrlencoded;
exports.default = exports;
