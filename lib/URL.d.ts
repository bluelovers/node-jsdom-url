/**
 * Created by user on 2018/1/21/021.
 */
import { URLImplCore } from './URLImpl';
export declare class URLCore extends URLImplCore {
    constructor(href: any, base?: any);
    get [Symbol.toStringTag](): string;
}
export declare const URL: URLImplCore.IStaticURL<URLCore>;
export default URL;
