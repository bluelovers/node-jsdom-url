/**
 * Created by user on 2018/1/21/021.
 */

import { interface as WURLSearchParams, createDefaultIterator } from 'whatwg-url/lib/URLSearchParams';
import { implementation as WURLSearchParamsImpl } from 'whatwg-url/lib/URLSearchParams-impl';
import createClassProxy, { ClassProxyStatic, IClassProxyHandler } from 'class-proxy';
import { IURL, IImpl, IURL2 } from './URLImpl';

WURLSearchParamsImpl.prototype.inspect = function ()
{
	let name = 'WHATWGURLSearchParamsImpl';

	return `${name}("${this.toString()}")`;
};
Object.defineProperty(WURLSearchParamsImpl.prototype, 'inspect', {
	enumerable: false,

});

WURLSearchParams.prototype.inspect = function ()
{
	let name = 'WHATWGURLSearchParams';

	return `${name}("${this.toString()}")`;
};
Object.defineProperty(WURLSearchParams.prototype, 'inspect', {
	enumerable: false,
});

export function unsafeRemoveStr(s): string
{
	return s.replace(/^[\?&]+/, '');
}

export class URLSearchParamsImplCore extends WURLSearchParamsImpl
{
	_list: [string, string][];
	_url?;

	constructor(constructorArgs: string, privateData?: URLSearchParamsCore.IPrivateData, ...argv)
	constructor(constructorArgs: [string, string][], privateData?: URLSearchParamsCore.IPrivateData, ...argv)
	constructor(constructorArgs: IImpl, privateData?: URLSearchParamsCore.IPrivateData, ...argv)
	constructor(constructorArgs: IURL, privateData?: URLSearchParamsCore.IPrivateData, ...argv)
	constructor(constructorArgs, privateData?: URLSearchParamsCore.IPrivateData, ...argv)
	constructor(initArgv, privateData: URLSearchParamsCore.IPrivateData = {
		doNotStripQMark: false,
	}, ...argv)
	{
		let constructorArgs = [];

		if (!Array.isArray(initArgv))
		{
			if (typeof initArgv == 'string')
			{
				constructorArgs = [initArgv];
			}
			else if (initArgv instanceof WURLSearchParamsImpl || initArgv instanceof WURLSearchParams)
			{
				constructorArgs = [initArgv._list.slice()];
			}
			else if (initArgv && typeof initArgv.search == 'string')
			{
				constructorArgs = [initArgv.search];
			}
			else if (initArgv && typeof initArgv.query == 'string')
			{
				constructorArgs = [initArgv.query];
			}
			else if (initArgv === true)
			{
				constructorArgs = [''];
			}
			else
			{
				// console.warn(initArgv);
				constructorArgs = initArgv;
			}

			if (privateData && privateData.doNotStripQMark && typeof constructorArgs[0] == 'string')
			{
				/**
				 * unsafe remove ??&
				 * @type {string}
				 */
				constructorArgs[0] = unsafeRemoveStr(constructorArgs[0]);
			}
		}
		else
		{
			constructorArgs = initArgv;
		}

		super(constructorArgs, privateData, ...argv);

		if (privateData && privateData.inheritURL)
		{
			if (typeof privateData.inheritURL == 'object')
			{
				this._url = privateData.inheritURL;
			}
			else if (initArgv._url)
			{
				this._url = initArgv._url;
			}
		}
	}

	/**
	 *
	 * @param unsafe remove ??&
	 * @param {boolean} unsafe
	 * @returns {string}
	 */
	static stripQMark(s, unsafe = true): string
	{
		return unsafe ? unsafeRemoveStr(s) : s.replace(/^\?/, '');
	}

	static create(constructorArgs, IPrivateData?: URLSearchParamsCore.IPrivateData, ...argv)
	{
		return new this(constructorArgs, IPrivateData, ...argv);
	}

	clone()
	{
		return new URLSearchParamsImpl(this);
	}

	get [Symbol.toStringTag]()
	{
		return 'URLSearchParamsImpl';
	}

	inspect()
	{
		let name = this[Symbol.toStringTag];

		return `${name}("${this.toString()}")`;
	}

	toJSON()
	{
		return this.toString();
	}

	toArray()
	{
		return this._list.slice();
	}

	listAll()
	{
		return this.toArray();
	}

	toString(bool?: boolean): string
	{
		if (bool)
		{
			return this.listAll()
				.reduce(function (a, value)
				{
					a.push(value.join('='));
					return a;
				}, [])
				.join('&')
				;
		}

		return super.toString();
	}

	get length()
	{
		return this._list.length;
	}

	[Symbol.iterator]()
	{
		return super[Symbol.iterator]();
	}

	keys()
	{
		return createDefaultIterator(this, 'key');
	}

	values()
	{
		return createDefaultIterator(this, 'values');
	}

	entries()
	{
		return super[Symbol.iterator]();
	}

	_updateSteps()
	{
		super._updateSteps();
		return this;
	}

	sort()
	{
		super.sort();
		return this;
	}

	has(name)
	{
		return super.has(name);
	}

	get(name)
	{
		return super.get(name);
	}

	getAll(name: string): string[]
	{
		return super.getAll(name);
	}

	set(name, value)
	{
		super.set(name, value);
		return this;
	}

	delete(name)
	{
		super.delete(name);
		return this;
	}

	append(name, value)
	{
		super.append(name, value);
		return this;
	}
}

export class URLSearchParamsCore extends WURLSearchParams
{
	_list: [string, string][];
	_url?;

	static create(...argv)
	{
		// @ts-ignore
		return new this(...argv);
	}

	get [Symbol.toStringTag]()
	{
		return 'URLSearchParams';
	}

	toArray()
	{
		return this._list.slice();
	}

	listAll()
	{
		return this.toArray();
	}

	toString(bool?: boolean): string
	{
		if (bool)
		{
			return this.listAll()
				.reduce(function (a, value)
				{
					a.push(value.join('='));
					return a;
				}, [])
				.join('&')
				;
		}

		return super.toString();
	}

	get length()
	{
		return this._list.length;
	}

	entries()
	{
		return super.entries();
	}

	keys()
	{
		return super.keys();
	}

	values()
	{
		return super.values();
	}

	forEach(callback)
	{
		return super.forEach(callback);
	}

	sort()
	{
		return super.sort();
	}

	has(name)
	{
		return super.has(name);
	}

	set(name, value)
	{
		return super.set(name, value);
	}

	append(name, value)
	{
		return super.append(name, value);
	}
}

export import IStaticURLSearchParams = URLSearchParamsCore.IStaticURLSearchParams;
export import IPrivateData = URLSearchParamsCore.IPrivateData;
export import IURLSearchParams = URLSearchParamsCore.IURLSearchParams;

export import vURLSearchParamsItem = URLSearchParamsCore.vURLSearchParamsItem;

export module URLSearchParamsCore
{
	export type vURLSearchParamsItem = [string, string];

	export interface IPrivateData
	{
		doNotStripQMark?: boolean,
		inheritURL?: boolean,
	}

	export interface IURLSearchParams
	{
		_list: [string, string][],
		_url?;
	}

	export interface IStaticURLSearchParams<T> extends ClassProxyStatic<T>
	{
		new(constructorArgs, privateData?: IPrivateData, ...argv): T

		create(constructorArgs, privateData?: IPrivateData, ...argv): T;
	}
}

export function packProxyURLSearchParams<T>(classURL: URLSearchParamsCore.IStaticURLSearchParams<T>,
	handler?: IClassProxyHandler
)
{
	return createClassProxy(classURL, Object.assign({
		get(target, name)
		{
			return target[name];
		},
		set(target, prop, value, receiver)
		{
			target[prop] = value;
			return true;
		},
	}, handler) as IClassProxyHandler) as URLSearchParamsCore.IStaticURLSearchParams<T>;
}

export const URLSearchParamsImpl = packProxyURLSearchParams(URLSearchParamsImplCore);
export const URLSearchParams = packProxyURLSearchParams(URLSearchParamsCore);

export default URLSearchParams;
