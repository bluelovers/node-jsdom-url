/**
 * Created by user on 2018/2/16/016.
 */

export * from 'whatwg-url/lib/urlencoded';
import { percentEncode, percentDecode } from 'whatwg-url/lib/urlencoded';

import { isASCIIHex } from 'whatwg-url/lib/infra';
export { isASCIIHex }

export interface IOptionsUrldecodeed
{
	unsafe?: boolean,
	noEqual?: boolean,
}

export interface IParseUrlencoded extends Array<string>
{
	[0]: string,
	[1]?: string,
}

export function decodeUrlencoded(input, options: IOptionsUrldecodeed = {
	noEqual: true,
})
{
	return joinUrldecodeed(parseUrlencoded(input, options), options);
}

export function joinUrldecodeed(list: IParseUrlencoded[], options: IOptionsUrldecodeed = {})
{
	return list
		.reduce(function (a, value)
		{
			if (options.unsafe && (typeof value[1] == 'undefined' || value[1] === ''))
			{
				a.push(value[0]);
			}
			else
			{
				a.push(value.join('='));
			}

			return a;
		}, [])
		.join('&')
		;
}

export function strictlySplitByteSequence(buf: Buffer, cp): Buffer[]
{
	const list = [];
	let last = 0;
	let i = buf.indexOf(cp);
	while (i >= 0)
	{
		list.push(buf.slice(last, i));
		last = i + 1;
		i = buf.indexOf(cp, last);
	}
	if (last !== buf.length)
	{
		list.push(buf.slice(last));
	}
	return list;
}

export function replaceByteInByteSequence(buf: Buffer, from, to)
{
	let i = buf.indexOf(from);
	while (i >= 0)
	{
		buf[i] = to;
		i = buf.indexOf(from, i + 1);
	}
	return buf;
}

export function bufferFrom(input, ...argv): Buffer
{
	return Buffer.isBuffer(input) ? input : Buffer.from(input, ...argv);
}

export function parseUrlencoded(input, options: IOptionsUrldecodeed = {}): IParseUrlencoded[]
{
	const sequences = strictlySplitByteSequence(bufferFrom(input), 38);
	const output = [];
	for (const bytes of sequences)
	{
		if (bytes.length === 0)
		{
			continue;
		}

		let _noEqual: boolean;

		let name;
		let value;
		const indexOfEqual = bytes.indexOf(61);

		if (indexOfEqual >= 0)
		{
			name = bytes.slice(0, indexOfEqual);
			value = bytes.slice(indexOfEqual + 1);
		}
		else
		{
			name = bytes;
			value = Buffer.alloc(0);

			_noEqual = true;
		}

		name = replaceByteInByteSequence(Buffer.from(name), 43, 32);
		value = replaceByteInByteSequence(Buffer.from(value), 43, 32);

		if (_noEqual && options.noEqual)
		{
			output.push([percentDecode(name).toString()]);
		}
		else
		{
			output.push([percentDecode(name).toString(), percentDecode(value).toString()]);
		}
	}
	return output;
}

import * as self from './urlencoded';
export default self;
