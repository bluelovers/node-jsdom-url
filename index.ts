/**
 * Created by user on 2018/1/21/021.
 */

export * from 'whatwg-url';
import { isValidURLObject } from './lib/valid/URL';

export { isValidURLObject }
export const isValidURL = isValidURLObject;

import { URLSearchParams } from './lib/URLSearchParams';
import { URL } from './lib/URL';
import { URLImpl, URLImplCore } from './lib/URLImpl';

export { URL, URLImpl, URLSearchParams }

export default URL;
