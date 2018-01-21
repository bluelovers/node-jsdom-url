/**
 * Created by user on 2018/1/21/021.
 */

import { interface as URLSearchParams } from 'whatwg-url/lib/URLSearchParams';

URLSearchParams.prototype.inspect = function inspect()
{
	let name = 'URLSearchParams';

	return `${name}("${this.toString()}")`;
};

URLSearchParams.prototype.toJSON = function inspect()
{
	return this.toString();
};

Object.defineProperty(URLSearchParams.prototype, 'inspect', {
	enumerable: false,
});
Object.defineProperty(URLSearchParams.prototype, 'toJSON', {
	enumerable: false,
});

export { URLSearchParams };
export default URLSearchParams;
