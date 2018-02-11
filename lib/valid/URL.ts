/**
 * Created by user on 2018/1/21/021.
 */

import { implementation as WURLImpl } from 'whatwg-url/lib/URL-impl';
import { interface as WURL } from 'whatwg-url/lib/URL';

export function isValidURLObject(obj): string
{
	if (!obj)
	{
		return obj;
	}
	else if (typeof obj == 'string')
	{
		return obj;
	}
	else if (obj instanceof WURLImpl || obj instanceof WURL)
	{
		return obj.href;
	}
	else if (typeof obj.href == 'string')
	{
		return obj.href;
	}

	return null;
}

export default isValidURLObject;
