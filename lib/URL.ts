/**
 * Created by user on 2018/1/21/021.
 */

import { interface as URL } from 'whatwg-url/lib/URL';

URL.prototype.inspect = function inspect()
{
	let name = 'URL';

	return `${name}("${this.toString()}")`;
};

Object.defineProperty(URL.prototype, 'inspect', {
	enumerable: false,
});

export { URL };
export default URL;
