/**
 * Created by user on 2018/1/21/021.
 */
export * from 'whatwg-url';
import { isValidURLObject } from './lib/valid/URL';
export { isValidURLObject };
export declare const isValidURL: typeof isValidURLObject;
export * from './lib/URLImpl';
export { URLImpl } from './lib/URLImpl';
export * from './lib/URLSearchParams';
export { URLSearchParams, URLSearchParamsImpl } from './lib/URLSearchParams';
export { decodeUrlencoded, IParseUrlencoded, parseUrlencoded } from './lib/urlencoded';
import { URL } from './lib/URL';
export { URL };
export default URL;
