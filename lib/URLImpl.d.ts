/**
 * Created by user on 2018/2/11/011.
 */
import { ClassProxyStatic } from 'class-proxy';
import { implementation as WURLImpl } from 'whatwg-url/lib/URL-impl';
import { URLSearchParamsImpl, IURLSearchParams, URLSearchParamsImplCore } from './URLSearchParams';
export { URLSearchParamsImpl, URLSearchParamsImplCore };
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
    _query?: URLSearchParamsImplCore;
    _url?: URLImplCore.IImpl;
    constructor(href: any, base?: any);
    static create(href: any, base?: any): URLImplCore;
    get searchParams(): URLSearchParamsImplCore;
    get [Symbol.toStringTag](): string;
    inspect(): string;
    toJSON(): string;
    toString(): string;
    toObject(): IURL;
    static isValidURLObject(url: any): string;
}
export import IURL = URLImplCore.IURL;
export import IURL2 = URLImplCore.IURL2;
export import IImpl = URLImplCore.IImpl;
export import IStaticURL = URLImplCore.IStaticURL;
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
        searchParams?: IURLSearchParams;
    }
    interface IURL2 {
        _query?: IURLSearchParams;
        _url?: URLImplCore.IImpl;
    }
    interface IStaticURL<T> extends ClassProxyStatic<T> {
        new (href: Array<T | string>): T;
        new (href: T | string, base?: T | string): T;
        new (href: any, base?: any): T;
        create(href: Array<T | string>): T;
        create(href: T | string, base?: T | string): T;
        create(href: any, base?: any): T;
    }
}
export declare function packProxyURL<T>(classURL: URLImplCore.IStaticURL<T>): IStaticURL<T>;
export declare const URLImpl: IStaticURL<URLImplCore>;
export default URLImpl;
