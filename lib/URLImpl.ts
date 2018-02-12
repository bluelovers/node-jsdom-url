/**
 * Created by user on 2018/2/11/011.
 */

import createClassProxy from 'class-proxy';
import { implementation as WURLImpl } from 'whatwg-url/lib/URL-impl';
import { URLSearchParamsImpl, IURLSearchParams, URLSearchParamsImplCore } from './URLSearchParams';
import { isValidURLObject } from './valid/URL';

export { URLSearchParamsImpl, URLSearchParamsImplCore }

export class URLImplCore extends WURLImpl
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

	_query?: URLSearchParamsImplCore;
	_url?: URLImplCore.IImpl;

	constructor(href, base?)
	{
		if (Array.isArray(href))
		{
			[href, base] = href;
		}

		//console.log(222, [href, base]);

		super([href && href.toString(), base ? base.toString() : undefined]);

		this._query = new URLSearchParamsImpl(this._query, {
			doNotStripQMark: true,
		});

		//console.log(this._query);
	}

	static create(href, base?)
	{
		return new this(href, base);
	}

	get searchParams(): URLSearchParamsImplCore
	{
		return this._query;
	}

	get [Symbol.toStringTag]()
	{
		return 'URLImpl';
	}

	inspect()
	{
		let name = this[Symbol.toStringTag];

		return `${name}("${this.toString()}")`;
	}

	toJSON()
	{
		return this.href;
	}

	toString()
	{
		return this.href;
	}

	toObject()
	{
		const self = this;

		return Object.keys(self).reduce(function (ret, k)
		{
			ret[k] = self[k];

			return ret;
		}, {} as URLImplCore.IURL);
	}

	static isValidURLObject(url)
	{
		return isValidURLObject(url);
	}
}

export interface IURL extends URLImplCore.IURL
{}
export interface IURL2 extends URLImplCore.IURL2
{}
export interface IImpl extends URLImplCore.IImpl
{}
export interface IStaticURL<T> extends URLImplCore.IStaticURL<T>
{}

export module URLImplCore
{
	export interface IImpl
	{
		scheme: string,
		username: string,
		password: string,
		host: string,
		port,
		path: string[],
		query: string,
		fragment,
		cannotBeABaseURL: boolean,
	}

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
		searchParams?: IURLSearchParams;
	}

	export interface IURL2
	{
		_query?: IURLSearchParams;
		_url?: URLImplCore.IImpl;
	}

	export interface IStaticURL<T> extends createClassProxy.ClassProxyStatic<T>
	{
		create(href: Array<T | string>): T;
		create(href: T | string, base?: T | string): T;
		create(href: any, base?: any): T;
	}
}

export function packProxyURL<T>(classURL: URLImplCore.IStaticURL<T>)
{
	return createClassProxy(classURL, {
		get(target, name)
		{
			return target[name];
		},
		set(target, prop, value, receiver)
		{
			if (prop == '_query')
			{
				value._url = target;

				//console.log(value);
			}

			target[prop] = value;
			return true;
		},
		ownKeys(target): string[]
		{
			return [
				'href',
				'origin',
				'protocol',
				'username',
				'password',
				'host',
				'hostname',
				'port',
				'pathname',
				'search',
				'hash',
				'searchParams',
			];
		},
		getOwnPropertyDescriptor(target, prop)
		{
			return {
				value: target[prop],
				enumerable: this.ownKeys(target).includes(prop),
				configurable: true,
			};
		},

		/*
		construct(target, args)
		{
			return new target(...args);
		},
		*/
	} as createClassProxy.IClassProxyHandler) as URLImplCore.IStaticURL<T>;
}

export const URLImpl = packProxyURL(URLImplCore);

/*
let url = new URLImpl(['https://www.npmjs.com/package/dgeni?l=1&l=2&k=kkk']);
let url3 = new URLImplProxy([url]);

console.log(url);
console.log(url3, url3 instanceof WURLImpl);

//console.log(Object.keys(url));
//console.log(Object.keys(url3));

console.dir(url);
console.dir(url3);

console.dir(url3._url);

//console.dir(url);
*/

export default URLImpl;
