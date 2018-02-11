/**
 * Created by user on 2018/1/21/021.
 */

export * from 'whatwg-url';
import { isValidURLObject } from './lib/valid/URL';

export { isValidURLObject }
export const isValidURL = isValidURLObject;

export * from './lib/URLImpl';
import { URLImpl } from './lib/URLImpl';

export * from './lib/URLSearchParams';
import { URLSearchParams, URLSearchParamsImpl } from './lib/URLSearchParams';
import { URL } from './lib/URL';

export { URL, URLImpl, URLSearchParams, URLSearchParamsImpl }

export default URL;
