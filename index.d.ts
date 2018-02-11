export * from 'whatwg-url';
import { isValidURLObject } from './lib/valid/URL';
export { isValidURLObject };
export declare const isValidURL: typeof isValidURLObject;
import { URLSearchParams } from './lib/URLSearchParams';
import { URL } from './lib/URL';
import { URLImpl } from './lib/URLImpl';
export { URL, URLImpl, URLSearchParams };
export default URL;
