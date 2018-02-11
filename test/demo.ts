/**
 * Created by user on 2018/2/11/011.
 */

import URL from '..';

let url = new URL('https://www.npmjs.com/package/jsdom-url?zh=字幕组&ja=水辺の流星&k=DARLING in the FRANXX&a=1&a=2&b[]=1&b[]=2&c[0]=1&c[1]=2');

console.log(url);

console.log(`-------------`);

console.log(Object.keys(url));

console.log(`-------------`);

console.dir(url);

console.dir(url._url);

console.log(`-------------`);

for (let k in url)
{
	console.log(k, url[k]);
}

console.log(`-------------`);

console.log(url.origin);

console.dir(url._query.getAll('a'));
