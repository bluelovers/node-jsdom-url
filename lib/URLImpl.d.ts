import createClassProxy from 'class-proxy';
import { implementation as WURLImpl } from 'whatwg-url/lib/URL-impl';
import { URLSearchParams } from './URLSearchParams';
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
    searchParams: URLSearchParams;
    _query?: URLSearchParams;
    _url?: URLImplCore.IImpl;
    constructor(href: any, base?: any);
    static create(href: any, base?: any): URLImplCore;
    inspect(): string;
    toJSON(): string;
    toString(): string;
    toObject(): URLImplCore.IURL;
    static isValidURLObject(url: any): string;
}
export declare namespace URLImplCore {
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
        searchParams?: URLSearchParams;
    }
}
export declare function packProxy<T>(classURL: createClassProxy.ClassProxyStatic<T>): createClassProxy.ClassProxyStatic<T>;
export declare const URLImpl: createClassProxy.ClassProxyStatic<URLImplCore>;
export default URLImpl;
