# jsdom-url

> a not strict JSDOM URL object

`npm install jsdom-url`

## demo

```ts
import URL from 'jsdom-url';

let url = new URL('https://www.npmjs.com/package/jsdom-url');

console.log(url);

console.log(`-------------`);

console.log(Object.keys(url));

console.log(`-------------`);

console.dir(url);

console.log(`-------------`);

for (let k in url)
{
	console.log(k, url[k]);
}

console.log(`-------------`);

console.log(url.origin);
```

### output

```
URL("https://www.npmjs.com/package/jsdom-url")
-------------
[ 'href',
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
  'searchParams' ]
-------------
URLImplCore {
  href: 'https://www.npmjs.com/package/jsdom-url',
  origin: 'https://www.npmjs.com',
  protocol: 'https:',
  username: '',
  password: '',
  host: 'www.npmjs.com',
  hostname: 'www.npmjs.com',
  port: '',
  pathname: '/package/jsdom-url',
  search: '',
  hash: '',
  searchParams: 
   URLSearchParamsImpl {
     _list: [],
     _url: URLImplCore { _url: [Object], _query: [Circular] },
     [Symbol(wrapper)]: URLSearchParams {} } }
-------------
href https://www.npmjs.com/package/jsdom-url
origin https://www.npmjs.com
protocol https:
username 
password 
host www.npmjs.com
hostname www.npmjs.com
port 
pathname /package/jsdom-url
search 
hash 
searchParams URLSearchParamsImpl {
  _list: [],
  _url: URL("https://www.npmjs.com/package/jsdom-url"),
  [Symbol(wrapper)]: URLSearchParams("") }
-------------
https://www.npmjs.com
```
