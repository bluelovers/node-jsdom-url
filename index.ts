/**
 * Created by user on 2018/1/21/021.
 */

export * from './lib/whatwg-url';
import * as WURL from './lib/whatwg-url';

import { isValid as isValidURL } from './lib/valid/URL';

// @ts-ignore
import { nonenumerable, enumerable } from 'core-decorators';

export type vURL = string | WURL.URL | URL | { href: string } | WURL.IURL;

export class URL extends WURL.URL implements WURL.IURL
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
	searchParams;

	constructor(href: string, base?: string)
	constructor(href: vURL, base?: vURL)
	constructor(href, base?)
	{
		if (base === null)
		{
			base = undefined;
		}
		else
		{
			base = isValidURL(base);
		}

		href = isValidURL(href);

		//super([href, base]);

		super(href, base);
	}

	static create(href, base?)
	{
		return new this(href, base);
	}

	@nonenumerable
	toJSON()
	{
		return this.href;
	}

	@nonenumerable
	toString()
	{
		return this.href;
	}

	@nonenumerable
	toObject()
	{
		let ret = {} as WURL.IURL;

		for (let k in this)
		{
			// @ts-ignore
			ret[k] = this[k];
		}

		return ret;
	}
}

export default URL;
