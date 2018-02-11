import { URLImplCore, URLImpl } from './URLImpl';
import { URLSearchParams } from './URLSearchParams';
export declare class URL extends URLImpl {
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
    static create(href: any, base?: any): URL;
}
export default URL;
