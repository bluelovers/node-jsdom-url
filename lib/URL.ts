/**
 * Created by user on 2018/1/21/021.
 */

import * as conversions from 'webidl-conversions';
import { interface as WURL } from 'whatwg-url/lib/URL';
import { URLImplCore, URLImpl } from './URLImpl';
import { URLSearchParams } from './URLSearchParams';
import { isValidURLObject } from './valid/URL';

WURL.prototype.inspect = function inspect()
{
	let name = 'whatwg-url';
	return `${name}("${this.toString()}")`;
};

Object.defineProperty(WURL.prototype, 'inspect', {
	enumerable: false,
});

export class URL extends URLImpl
{
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

	constructor(href, base?)
	{
		if (Array.isArray(href))
		{
			[href, base] = href;
		}

		//console.log(111, [href, base]);

		href = conversions["USVString"](isValidURLObject(href), { context: "Failed to construct 'URL': parameter 1" });
		if (base !== undefined && base !== null)
		{
			base = conversions["USVString"](isValidURLObject(base), { context: "Failed to construct 'URL': parameter 2" });
		}

		//console.log(333, [href, base]);

		super([href, base || undefined]);
	}

	static create(href, base?)
	{
		return new this(href, base);
	}
}

/*
let url = new URL(['https://www.npmjs.com/package/dgeni?l=1&l=2&k=kkk前篇']);

console.log(url);
console.dir(url);
*/

export default URL;
