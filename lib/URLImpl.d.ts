/**
 * Created by user on 2018/2/11/011.
 */
import createClassProxy from 'class-proxy';
import { implementation as WURLImpl } from 'whatwg-url/lib/URL-impl';
import { URLSearchParamsImplCore, IURLSearchParams } from './URLSearchParams';
export declare class URLImplCore extends WURLImpl {
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
    searchParams: URLSearchParamsImplCore;
    _query?: URLSearchParamsImplCore;
    _url?: URLImplCore.IImpl;
    constructor(href: any, base?: any);
    static create(href: any, base?: any): URLImplCore;
    readonly [Symbol.toStringTag]: string;
    inspect(): string;
    toJSON(): string;
    toString(): string;
    toObject(): URLImplCore.IURL;
    static isValidURLObject(url: any): string;
}
export interface IURL extends URLImplCore.IURL {
}
export interface IURL2 extends URLImplCore.IURL2 {
}
export interface IImpl extends URLImplCore.IImpl {
}
export interface IStaticURL<T> extends URLImplCore.IStaticURL<T> {
}
export declare module URLImplCore {
    interface IImpl {
        scheme: string;
        username: string;
        password: string;
        host: string;
        port: any;
        path: string[];
        query: string;
        fragment: any;
        cannotBeABaseURL: boolean;
    }
    interface IURL {
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
        searchParams?: IURLSearchParams | URLSearchParamsImplCore;
    }
    interface IURL2 {
        _query: IURLSearchParams | URLSearchParamsImplCore;
        _url: URLImplCore.IImpl;
    }
    interface IStaticURL<T> extends createClassProxy.ClassProxyStatic<T> {
        create(href: Array<T | string>): T;
        create(href: T | string, base?: T | string): T;
        create(href: any, base?: any): T;
    }
}
export declare function packProxyURL<T>(classURL: URLImplCore.IStaticURL<T>): URLImplCore.IStaticURL<T>;
export declare const URLImpl: URLImplCore.IStaticURL<URLImplCore>;
export default URLImpl;
