/**
 * Created by user on 2018/1/21/021.
 */
import { interface as WURLSearchParams } from 'whatwg-url/lib/URLSearchParams';
import { implementation as WURLSearchParamsImpl } from 'whatwg-url/lib/URLSearchParams-impl';
import createClassProxy from 'class-proxy';
import { IURL, IImpl } from './URLImpl';
export declare function unsafeRemoveStr(s: any): string;
export declare class URLSearchParamsImplCore extends WURLSearchParamsImpl {
    _list: [string, string][];
    _url?: any;
    constructor(constructorArgs: string, privateData?: URLSearchParamsCore.IPrivateData, ...argv: any[]);
    constructor(constructorArgs: [string, string][], privateData?: URLSearchParamsCore.IPrivateData, ...argv: any[]);
    constructor(constructorArgs: IImpl, privateData?: URLSearchParamsCore.IPrivateData, ...argv: any[]);
    constructor(constructorArgs: IURL, privateData?: URLSearchParamsCore.IPrivateData, ...argv: any[]);
    constructor(constructorArgs: any, privateData?: URLSearchParamsCore.IPrivateData, ...argv: any[]);
    /**
     *
     * @param unsafe remove ??&
     * @param {boolean} unsafe
     * @returns {string}
     */
    static stripQMark(s: any, unsafe?: boolean): string;
    static create(constructorArgs: any, IPrivateData?: URLSearchParamsCore.IPrivateData, ...argv: any[]): URLSearchParamsImplCore;
    clone(): URLSearchParamsImplCore;
    readonly [Symbol.toStringTag]: string;
    inspect(): string;
    toJSON(): string;
    toArray(): [string, string][];
    listAll(): [string, string][];
    toString(bool?: boolean): string;
    readonly length: number;
    [Symbol.iterator](): any;
    keys(): any;
    values(): any;
    entries(): any;
    _updateSteps(): this;
    sort(): this;
    has(name: any): any;
    get(name: any): any;
    getAll(name: string): string[];
    set(name: any, value: any): this;
    delete(name: any): this;
    append(name: any, value: any): this;
}
export declare class URLSearchParamsCore extends WURLSearchParams {
    _list: [string, string][];
    _url?: any;
    static create(...argv: any[]): URLSearchParamsCore;
    readonly [Symbol.toStringTag]: string;
    toArray(): [string, string][];
    listAll(): [string, string][];
    toString(bool?: boolean): string;
    readonly length: number;
    entries(): any;
    keys(): any;
    values(): any;
    forEach(callback: any): any;
    sort(): any;
    has(name: any): any;
    set(name: any, value: any): any;
    append(name: any, value: any): any;
}
export interface IStaticURLSearchParams<T> extends URLSearchParamsCore.IStaticURLSearchParams<T> {
}
export interface IPrivateData extends URLSearchParamsCore.IPrivateData {
}
export interface IURLSearchParams extends URLSearchParamsCore.IURLSearchParams {
}
export declare type vURLSearchParamsItem = URLSearchParamsCore.vURLSearchParamsItem;
export declare module URLSearchParamsCore {
    type vURLSearchParamsItem = [string, string];
    interface IPrivateData {
        doNotStripQMark?: boolean;
        inheritURL?: boolean;
    }
    interface IURLSearchParams {
        _list: [string, string][];
        _url?: any;
    }
    interface IStaticURLSearchParams<T> extends createClassProxy.ClassProxyStatic<T> {
        new (constructorArgs: any, privateData?: IPrivateData, ...argv: any[]): T;
        create(constructorArgs: any, privateData?: IPrivateData, ...argv: any[]): T;
    }
}
export declare function packProxyURLSearchParams<T>(classURL: URLSearchParamsCore.IStaticURLSearchParams<T>, handler?: createClassProxy.IClassProxyHandler): URLSearchParamsCore.IStaticURLSearchParams<T>;
export declare const URLSearchParamsImpl: URLSearchParamsCore.IStaticURLSearchParams<URLSearchParamsImplCore>;
export declare const URLSearchParams: URLSearchParamsCore.IStaticURLSearchParams<URLSearchParamsCore>;
export default URLSearchParams;
