import { URLImplCore } from './URLImpl';
export declare class URLCore extends URLImplCore {
    constructor(href: any, base?: any);
    readonly [Symbol.toStringTag]: string;
}
export declare const URL: URLImplCore.IStaticURL<URLCore>;
export default URL;
