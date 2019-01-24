/**
 * Created by user on 2018/1/21/021.
 */

import conversions = require('webidl-conversions');
import { interface as WURL } from 'whatwg-url/lib/URL';
import { URLImplCore, URLImpl, packProxyURL } from './URLImpl';
import { isValidURLObject } from './valid/URL';
import createClassProxy from 'class-proxy';

WURL.prototype.inspect = function inspect()
{
	let name = 'WHATWGURL';
	return `${name}("${this.toString()}")`;
};

Object.defineProperty(WURL.prototype, 'inspect', {
	enumerable: false,
});

export class URLCore extends URLImplCore
{
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

	get [Symbol.toStringTag]()
	{
		return 'URL';
	}

	/*
	static create(href, base?)
	{
		return new this(href, base);
	}
	*/
}

export const URL = packProxyURL(URLCore);

/*
let url = new URL(['https://www.npmjs.com/package/dgeni?l=1&l=2&k=kkk前篇']);
let url2 = new URLImpl(['https://www.npmjs.com/package/dgeni?l=1&l=2&k=kkk']);

console.log(url, url instanceof URLImpl);
console.log(url2, url2 instanceof URL, url + '');
*/

export default URL;

/*
let parsedURL: URL;

parsedURL = new URL('https://www.npmjs.com/package/dgeni?l=1&l=2&k=kkk前篇');

console.dir(parsedURL);

console.log(parsedURL.searchParams);
*/
