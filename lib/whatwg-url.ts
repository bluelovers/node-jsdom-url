/**
 * Created by user on 2018/1/21/021.
 */

export * from 'whatwg-url';
import { URLSearchParams } from './URLSearchParams';
import * as WURL from 'whatwg-url';

import './URL';
import './URLSearchParams';

export declare class URL
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

	constructor(href, base?)
}

import * as self from './whatwg-url';
export default self;
