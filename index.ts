/**
 * Created by user on 2018/1/21/021.
 */

export * from './lib/whatwg-url';
import * as WURL from './lib/whatwg-url';
import { implSymbol, wrapperSymbol } from 'whatwg-url/lib/utils';

import { implementation as WURL_Impl }  from 'whatwg-url/lib/URL-impl';

import { URLSearchParams }  from './lib/URLSearchParams';

// @ts-ignore
import { nonenumerable, enumerable } from 'core-decorators';

export type vURL = string | WURL.URL | URL;

export interface IURL
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
}

export class URL extends WURL.URL implements IURL
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

	constructor(href: string, base?)
	constructor(href: vURL, base?: vURL)
	constructor(href, base?)
	{
		if (base === null)
		{
			base = undefined;
		}

		if (href instanceof WURL.URL)
		{
			href = href.href;
		}
		if (base instanceof WURL.URL)
		{
			base = base.href;
		}

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
		let ret = {} as IURL;

		for (let k in this)
		{
			// @ts-ignore
			ret[k] = this[k];
		}

		return ret;
	}
}

export default URL;
